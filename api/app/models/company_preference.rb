# frozen_string_literal: true

class CompanyPreference < Tenant
  belongs_to :company, class_name: 'Company', foreign_key: 'company_id'

  def self.instance
    first || create
  end
end
