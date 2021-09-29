# frozen_string_literal: true

class Tenant < ApplicationRecord
  self.abstract_class = true

  connects_to database: { writing: :app_user, reading: :app_user }

  SET_COMPANY_ID_SQL = 'SET rls.company_id = %s'
  RESET_COMPANY_ID_SQL = 'RESET rls.company_id'
  def self.switch(tenant)
    company_id = Company.find_by_subdomain(tenant).id
    connection.execute format(SET_COMPANY_ID_SQL, connection.quote(company_id))

    "RLS changed to '#{tenant}'"
  end
end
