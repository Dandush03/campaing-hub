# frozen_string_literal: true

class CreateCompanyPreferences < ActiveRecord::Migration[6.1]
  def change
    create_rls_table :company_preferences, id: :uuid do |t|
      t.string :available_locales, array: true, default: %i[es en]
      t.string :default_locale, default: :en

      t.timestamps
    end
    add_index :company_preferences, :company_id, unique: true
  end
end
