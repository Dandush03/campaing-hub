# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users, class_name: 'User', foreign_key: 'company_id', dependent: :destroy
  has_many :campaigns, class_name: 'Campaign', foreign_key: 'company_id', dependent: :destroy
  has_many :visual_media, class_name: 'VisualMedium', foreign_key: 'company_id', dependent: :destroy
  has_many :contacts, class_name: 'Contact', foreign_key: 'company_id', dependent: :destroy

  has_secure_token :identification, length: 32

  has_one_attached :logo

  validates :name, presence: true, uniqueness: true

  validates :subdomain, presence: true, uniqueness: true

  def self.current
    find(Tenant.connection.execute("SELECT current_setting('rls.company_id')").getvalue(0, 0))
  rescue ActiveRecord::StatementInvalid
    'no tenant is selected'
  end
end
