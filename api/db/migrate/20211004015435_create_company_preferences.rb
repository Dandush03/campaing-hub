# frozen_string_literal: true

class CreateCompanyPreferences < ActiveRecord::Migration[6.1]
  def up
    create_rls_table :company_preferences, id: :uuid do |t|
      t.string :available_locales, array: true, default: %i[es en]
      t.string :default_locale, default: :en

      t.references :company, index: true, foraign_key: true, type: :uuid
      t.timestamps
    end
  end

  def down
    drop_rls_table :company_preferences
  end
end
