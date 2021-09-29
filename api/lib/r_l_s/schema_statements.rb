# frozen_string_literal: true

module RLS
  # add row level security
  class Migration < ActiveRecord::Migration[6.1]
    def source_db
      'source_database'
    end
  end

  # Include create_rls_table to SchemaStatements

  # rubocop:disable Metrics/ModuleLength
  module SchemaStatements
    def create_rls_tenant_table(table_name, **options, &block)
      create_rls_blocking_function
      create_table(table_name, **options, &block)
      append_blocking_function(table_name)
      create_rls_setter_function(:company)
      create_rls_user
    end

    def drop_rls_tenant_table(table_name)
      drop_rls_user
      drop_rls_setter_function
      detach_blocking_function(table_name)
      drop_table(table_name)
      drop_rls_blocking_function
    end

    def create_rls_table(table_name, **options, &block)
      create_table(table_name, **options, &block)
      grant_user_privilage(table_name)
      create_rls_column(table_name)
      create_rls_policy(table_name)
      append_trigger_function(table_name)
    end

    def drop_rls_table(table_name)
      detach_trigger_function(table_name)
      drop_rls_policy(table_name)
      remove_rls_column(table_name)
      revoke_user_privilage(table_name)
      drop_table(table_name)
    end

    def create_rls_user(name = :app_user, password = 'password')
      Migration.execute <<-SQL
        DROP ROLE IF EXISTS #{name};
        CREATE USER #{name} WITH PASSWORD '#{password}';
        GRANT ALL PRIVILEGES ON TABLE schema_migrations TO #{name};
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO #{name};
      SQL
    end

    def drop_rls_user(name = :app_user)
      Migration.execute "DROP USER #{name};"
    end

    def create_rls_blocking_function
      Migration.execute <<-SQL
        CREATE OR REPLACE FUNCTION id_safe_guard ()
          RETURNS TRIGGER LANGUAGE plpgsql AS $$
            BEGIN
              RAISE EXCEPTION 'This column is guarded due to tenancy dependency';
            END $$;
      SQL
    end

    def drop_rls_blocking_function
      Migration.execute 'DROP FUNCTION IF EXISTS id_safe_guard ();'
    end

    def create_rls_setter_function(column = :company)
      Migration.execute <<-SQL
        CREATE OR REPLACE FUNCTION company_id_setter ()
          RETURNS TRIGGER LANGUAGE plpgsql AS $$
            BEGIN
              new.#{column}_id:= (current_setting('rls.company_id'));
              RETURN new;
            END $$;
      SQL
    end

    def drop_rls_setter_function
      Migration.execute 'DROP FUNCTION IF EXISTS company_id_setter ();'
    end

    def append_blocking_function(table_name)
      Migration.execute <<-SQL
        CREATE TRIGGER id_safe_guard
          BEFORE UPDATE OF id ON #{table_name}
            FOR EACH ROW EXECUTE PROCEDURE id_safe_guard();
      SQL
    end

    def detach_blocking_function(table_name)
      Migration.execute <<-SQL
        DROP TRIGGER IF EXISTS id_safe_guard
          ON #{table_name};
      SQL
    end

    def append_trigger_function(table_name)
      Migration.execute <<-SQL
        CREATE TRIGGER company_id_setter
          BEFORE INSERT OR UPDATE ON #{table_name}
            FOR EACH ROW EXECUTE PROCEDURE company_id_setter();
      SQL
    end

    def detach_trigger_function(table_name)
      Migration.execute <<-SQL
        DROP TRIGGER IF EXISTS company_id_setter
          ON #{table_name};
      SQL
    end

    def create_rls_column(table_name, column = :company_id)
      Migration.execute <<-SQL
        ALTER TABLE #{table_name}
          ADD COLUMN IF NOT EXISTS #{column} uuid;
      SQL
    end

    def remove_rls_column(table_name, column = :company_id)
      Migration.execute <<-SQL
        ALTER TABLE #{table_name}
          DROP COLUMN IF EXISTS #{column};
      SQL
    end

    def grant_user_privilage(table_name, user = :app_user)
      Migration.execute <<-SQL
        GRANT SELECT, INSERT, UPDATE, DELETE ON #{table_name} TO #{user};
      SQL
    end

    def revoke_user_privilage(table_name, user = :app_user)
      Migration.execute <<-SQL
        REVOKE SELECT, INSERT, UPDATE, DELETE ON #{table_name} FROM #{user};
      SQL
    end

    def create_rls_policy(table_name, user = :app_user, column = :company_id)
      Migration.execute <<-SQL
        ALTER TABLE #{table_name} ENABLE ROW LEVEL SECURITY;
        CREATE POLICY #{table_name}_#{user}
          ON #{table_name}
          TO #{user}
          USING (#{column} = NULLIF(current_setting('rls.company_id', TRUE), '')::uuid);
      SQL
    end

    def drop_rls_policy(table_name, user = :app_user)
      Migration.execute <<-SQL
        DROP POLICY #{table_name}_#{user} ON #{table_name};
        ALTER TABLE #{table_name} DISABLE ROW LEVEL SECURITY;
      SQL
    end
  end
  # rubocop:enable Metrics/ModuleLength
end
