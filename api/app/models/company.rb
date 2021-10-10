# frozen_string_literal: true

class Company < ApplicationRecord
  has_one :company_preference, dependent: :destroy

  has_secure_token :identification, length: 32

  has_one_attached :logo

  validates :name, presence: true, uniqueness: true

  validates :subdomain, presence: true, uniqueness: true

  def self.current
    find_by_tenant_id(connection.execute("SELECT current_setting('rls.tenant_id')").getvalue(0, 0))
  rescue ActiveRecord::StatementInvalid
    'no tenant is selected'
  end
end
