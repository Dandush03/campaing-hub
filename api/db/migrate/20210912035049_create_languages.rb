# frozen_string_literal: true

class CreateLanguages < ActiveRecord::Migration[6.1]
  def change
    create_table :languages do |t|
      t.string :code, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :languages, :code, unique: true
    add_index :languages, :name, unique: true
  end
end
