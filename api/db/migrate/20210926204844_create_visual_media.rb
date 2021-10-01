# frozen_string_literal: true

class CreateVisualMedia < ActiveRecord::Migration[6.1]
  def up
    create_rls_table :visual_media, id: :uuid do |t|
      t.string  :title,      null: false, default: ''
      t.string  :url,        null: false, default: ''
      t.string  :signature,  null: false, default: ''
      t.string  :filename,   null: false, default: ''
      t.integer :rank,       null: false, default: 0
      t.string  :media_type

      t.string  :gallery_type
      t.uuid    :gallery_id
      t.timestamps
    end

    add_index :visual_media, %i[gallery_type gallery_id]
  end

  def down
    drop_rls_table :visual_media
  end
end
