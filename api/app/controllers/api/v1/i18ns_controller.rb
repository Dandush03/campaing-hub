# frozen_string_literal: true

module Api
  module V1
    # Translation Controller
    class I18nsController < ApiController
      def show
        render json: { menu: I18n.t('.menu'), dashboard: I18n.t('.dashboard') }, status: :ok
        # render json: I18n.t('.'), status: :ok
      end

      private

      def show_permited_params
        params.permit(%i[ns lng]).reverse_merge({ ns: 'dashboard', lng: 'en' })
      end
    end
  end
end
