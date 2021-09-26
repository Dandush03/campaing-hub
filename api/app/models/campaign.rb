# frozen_string_literal: true

class Campaign < ApplicationRecord
  has_many :visual_medium, as: :gallery, dependent: :destroy
  acts_as_taggable_on :labels

  validates :name, presence: true, length: { minimum: 3, maximum: 50 }
  validates :description, length: { minimum: 3, maximum: 255 }, allow_blank: true

  has_secure_token :token, length: 24
end
