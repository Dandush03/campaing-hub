# frozen_string_literal: true

module Api
  module V1
    module Corporate
      # Home Controller
      class DashboardController < CorporateController
        def show
          render json: current_contact
        end
      end
    end
  end
end
