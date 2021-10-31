# frozen_string_literal: true

class CompanyPreference < ApplicationRecord
  belongs_to :company, class_name: 'Company', foreign_key: 'company_id'
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :countries

  def self.instance
    first || create
  end
end
