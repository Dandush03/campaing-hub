# frozen_string_literal: true

class CreateCompanyPreferenceLanguagesJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :company_preferences, :languages
  end
end
