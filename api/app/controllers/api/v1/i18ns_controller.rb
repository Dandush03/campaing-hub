# frozen_string_literal: true

module Api
  module V1
    # Translation Controller
    class I18nsController < ApiController
      def show
        I18n.locale = params[:lng] || session_locale
        render json: I18n.t(params[:ns]), status: :ok
      end

      def update
        return unless current_contact

        current_contact.preference.update(locale: params[:lng])
      end

      private

      def session_locale
        locale = current_contact.preference.locale
        locale || CompanyPreference.instance.default_locale
      end
    end
  end
end
