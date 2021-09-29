# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[6.1]
  def up
    create_rls_table :contacts, id: :uuid do |t|
      t.string :firstname,    null: false, default: ''
      t.string :lastname,     null: false, default: ''
      t.string :contact_type, null: false, default: 'advocate'
      t.string :image

      t.references :user, index: true, foraign_key: true, type: :uuid
      t.timestamps
    end
  end

  def down
    drop_rls_table :contacts
  end
end
