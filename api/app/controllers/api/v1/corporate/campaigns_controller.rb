# frozen_string_literal: true

module Api
  module V1
    module Corporate
      # Campaigns Controller
      class CampaignsController < CorporateController
        def index
          render json: collection, status: 200
        end

        def create; end

        def update; end

        private

        def collection
          CampaignSerializer.serialize(campaings)
        end

        def campaings
          @campaings ||= Campaign.all
        end
      end
    end
  end
end
