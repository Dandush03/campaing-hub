# frozen_string_literal: true

module Api
  module V1
    # CSRF Controller
    class CsrfController < ApiController
      def index
        render json: form_authenticity_token
      end
    end
  end
end
