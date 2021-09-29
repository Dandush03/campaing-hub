# frozen_string_literal: true

class CreateCompanies < ActiveRecord::Migration[6.1]
  def up
    create_rls_tenant_table :companies, id: :uuid do |t|
      t.string :name
      t.string :logo

      t.string :identification
      t.string :subdomain
      t.string :domain
      t.string :lang, null: false, default: 'en'

      t.timestamps
    end

    add_index :companies, :name,            unique: true
    add_index :companies, :identification,  unique: true
    add_index :companies, :domain,          unique: true
    add_index :companies, :subdomain,       unique: true
  end

  def down
    drop_rls_tenant_table :companies
  end
end
