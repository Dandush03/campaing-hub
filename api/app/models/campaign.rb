# frozen_string_literal: true

class Campaign < Tenant
  include Multilingual::Translatable
  translatable_fields :description, :name

  has_many :visual_media, as: :gallery, dependent: :destroy

  has_one :icon, -> { media('icon') }, class_name: 'VisualMedium', as: :gallery
  has_one :background, -> { media('background') }, class_name: 'VisualMedium', as: :gallery
  has_one :logo, -> { media('logo') }, class_name: 'VisualMedium', as: :gallery

  acts_as_taggable_on :labels

  validates :name, presence: true, length: { minimum: 3, maximum: 50 }
  validates :description, length: { minimum: 3, maximum: 255 }, allow_blank: true

  has_secure_token :token, length: 24
end
