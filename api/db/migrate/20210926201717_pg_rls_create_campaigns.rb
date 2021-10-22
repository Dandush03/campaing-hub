# frozen_string_literal: true

class PgRlsCreateCampaigns < ActiveRecord::Migration[6.1]
  def up
    create_rls_table :campaigns, id: :uuid do |t|
      t.string :name
      t.string :description
      t.string :token

      t.timestamps
    end

    add_index :campaigns, :token, unique: true
  end

  def down
    drop_rls_table :campaigns
  end
end
