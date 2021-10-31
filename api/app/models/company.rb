# frozen_string_literal: true

class Company < ApplicationRecord
  has_one :company_preference, dependent: :destroy

  has_one_attached :logo, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  validates :subdomain, presence: true, uniqueness: true

  def self.current
    PgRls::Tenant.fetch
  end
end
