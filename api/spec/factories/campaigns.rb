# frozen_string_literal: true

FactoryBot.define do
  factory :campaign do
    name { Faker::Name.unique.name }
    description { Faker::Name.unique.name }

    trait :new do
      after(:create) { |campaign| campaign.label_list.add('new') }
    end
  end
end
