# frozen_string_literal: true

class Contact < Tenant
  belongs_to :user, class_name: 'User', foreign_key: 'user_id', dependent: :destroy
  has_one :picture, -> { media('picture') }, class_name: 'VisualMedium', as: :gallery
  has_one :preference, dependent: :destroy
  accepts_nested_attributes_for :preference

  validates :firstname, presence: true, length: { minimum: 3, maximum: 50 }
  validates :lastname, presence: true, length: { minimum: 3, maximum: 50 }
  validates :contact_type, presence: true, inclusion: { in: %w[advocate admin super_admin] }

  after_create :initialize_default_preference

  private

  def initialize_default_preference
    build_preference.save!
  end
end
