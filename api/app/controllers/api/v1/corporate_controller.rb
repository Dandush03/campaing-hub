# frozen_string_literal: true

module Api
  module V1
    # Admin Controller
    class CorporateController < ApiController
      protect_from_forgery
      before_action :authenticate_user!
      before_action :set_paper_trail_whodunnit

      before_action :configure_permitted_parameters, if: :devise_controller?

      protected

      def user_for_paper_trail
        current_contact
      end

      def configure_permitted_parameters
        att_create = %i[username email password password_confirmation]
        att_update = %i[username email password current_password]
        devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(att_create) }
        devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(att_update) }
      end
    end
  end
end
