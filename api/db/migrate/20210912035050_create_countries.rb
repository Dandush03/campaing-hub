# frozen_string_literal: true

class CreateCountries < ActiveRecord::Migration[6.1]
  def change
    create_table :countries do |t|
      t.string :name, null: false
      t.string :code, null: false
      t.string :flag, null: false

      t.timestamps
    end

    add_index :countries, :code, unique: true
    add_index :countries, :name, unique: true
    add_index :countries, :flag, unique: true
  end
end
