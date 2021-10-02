# frozen_string_literal: true

TYPES = %w[icon background logo picture].freeze

FactoryBot.define do
  factory :visual_medium do
    title { Faker::Name.name }
    filename { Faker::Name.name }
    sequence(:signature) { |n| "bfec72b23487654e964febf8b89fe5f4ce796c#{n}c" }
    sequence(:url) { |n| "https://res.cloudinary.com/demo/image/upload/v1571218850/pjxlnrigoijmmeibdi0#{n}u.jpg" }
    sequence(:rank) { |n| n }
    sequence(:media_type) { |n| TYPES[n % 3] }
  end
end
