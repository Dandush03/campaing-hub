# frozen_string_literal: true

module Api
  module V1
    # Admin Controller
    class CorporateController < ApiController
      protect_from_forgery
      before_action :authenticate_user!

      def current_contact
        @current_contact ||= current_user.contact
      end

      before_action :configure_permitted_parameters, if: :devise_controller?

      protected

      def configure_permitted_parameters
        att_create = %i[username email password password_confirmation]
        att_update = %i[username email password current_password]
        devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(att_create) }
        devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(att_update) }
      end
    end
  end
end
