# frozen_string_literal: true

class CreateContactPreferences < ActiveRecord::Migration[6.1]
  def change
    create_rls_table :contact_preferences, id: :uuid do |t|
      t.string :locale
      t.references :contact, index: true, foraign_key: true, type: :uuid

      t.timestamps
    end
  end
end
