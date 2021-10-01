# frozen_string_literal: true

module Api
  module V1
    # Translation Controller
    class I18nsController < ApiController
      def show
        I18n.locale = params[:lng] || I18n.default_locale
        render json: I18n.t(params[:ns]), status: :ok
      end
    end
  end
end
