# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  before_action :switch_tenant

  def after_sign_in_path_for(_resources)
    '/corporate'
  end

  def current_company
    @current_company ||= Company.current
  end

  def switch_tenant
    Tenant.switch request.subdomain
  rescue NoMethodError
    redirect_to '/'
  end
end
