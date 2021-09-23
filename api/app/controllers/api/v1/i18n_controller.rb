# frozen_string_literal: true

module Api
  module V1
    # Translation Controller
    class I18nController < ApiController
      def index
        render json: I18n.t(index_params[:namespace]), status: :ok
      end

      private

      def index_params
        params.permit(:namespace).reverse_merge({ namespace: 'dashboard' })
      end
    end
  end
end
