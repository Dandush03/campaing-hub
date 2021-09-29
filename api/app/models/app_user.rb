# frozen_string_literal: true

class AppUser < ApplicationRecord
  self.abstract_class = true

  connects_to database: { writing: :app_user, reading: :app_user }

  SET_COMPANY_ID_SQL = 'SET rls.company_id = %s'
  RESET_COMPANY_ID_SQL = 'RESET rls.company_id'
  def self.with_current_company(company_id, &block)
    connection.execute format(SET_COMPANY_ID_SQL, connection.quote(company_id))
    block.call
  ensure
    connection.execute RESET_COMPANY_ID_SQL
  end
end
