# frozen_string_literal: true

FactoryBot.define do
  factory :advocate do
    user
    firstname { Faker::Name.unique.name }
    lastname { Faker::Name.unique.name }
    contact_type { 'advocate' }
  end

  factory :corporate do
    user
    firstname { Faker::Name.unique.name }
    lastname { Faker::Name.unique.name }
  end
end
