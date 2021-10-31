# frozen_string_literal: true

class CreateCompanyPreferenceCountriesJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :company_preferences, :countries
  end
end
