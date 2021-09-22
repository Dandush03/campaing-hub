# frozen_string_literal: true

class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures, id: :uuid do |t|
      t.string :title,      null: false, default: ''
      t.string :url,        null: false, default: ''
      t.string :signature,  null: false, default: ''
      t.string :filename,   null: false, default: ''
      t.integer :rank,      null: false, default: 0

      t.references :gallery, polymorphic: { default: 'Photo' }
      t.timestamps
    end
  end
end
