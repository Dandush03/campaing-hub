# frozen_string_literal: true

class Language < ApplicationRecord
  has_and_belongs_to_many :company_preferences

  validates :name, presence: true, uniqueness: { case_sensitive: true }
  validates :code, presence: true, uniqueness: { case_sensitive: true }
end
