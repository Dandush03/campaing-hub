# frozen_string_literal: true

FactoryBot.define do
  factory :company do
    name { Faker::Name.unique.name }

    subdomain { Faker::Internet.domain_word }
  end
end
