# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  around_action :with_current_company

  def current_company
    @current_company ||= Company.find_by_subdomain(request.subdomain)
  end

  def with_current_company(&block)
    AppUser.with_current_company(current_company.id, &block)
  end
end
