# frozen_string_literal: true

class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|
      t.string :name
      t.string :description
      t.string :token

      t.timestamps
    end

    add_index :campaigns, :token, unique: true
  end
end
