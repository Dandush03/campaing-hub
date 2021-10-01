# frozen_string_literal: true

class CreateVisualMedia < ActiveRecord::Migration[6.1]
  def up
    create_rls_table :visual_media, id: :uuid do |t|
      t.string :title,      null: false, default: ''
      t.string :url,        null: false, default: ''
      t.string :signature,  null: false, default: ''
      t.string :filename,   null: false, default: ''
      t.integer :rank,      null: false, default: 0

      t.references :gallery, polymorphic: { default: 'Photo' }
      t.timestamps
    end
  end

  def down
    drop_rls_table :visual_media
  end
end
