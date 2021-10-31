# frozen_string_literal: true

COUNTRY_CODE = Faker::Address.country_code.freeze
FactoryBot.define do
  factory :country do
    name { Faker::Address.country_by_code(code: COUNTRY_CODE) }
    code { COUNTRY_CODE }
    flag { COUNTRY_CODE }
  end
end
