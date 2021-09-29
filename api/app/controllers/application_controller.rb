# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  before_action :switch_tenant

  def current_company
    @current_company ||= Company.current
  end

  def switch_tenant
    Tenant.switch request.subdomain
  end
end
