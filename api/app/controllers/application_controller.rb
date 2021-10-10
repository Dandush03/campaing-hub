# frozen_string_literal: true

# Application Controller
class ApplicationController < ActionController::Base
  include PgRls::MultiTenancy

  around_action :switch_locale

  def after_sign_in_path_for(_resources)
    '/corporate'
  end

  def current_company
    @current_company ||= Company.current
  end

  def current_contact
    @current_contact ||= current_user&.contact
  end

  protected

  def switch_locale(&action)
    locale = current_contact.preference.locale if current_user
    locale ||= CompanyPreference.instance.default_locale
    cookies[:lng] = locale
    logger.debug "* Locale set to '#{locale}'"
    I18n.with_locale(locale, &action)
  end
end
