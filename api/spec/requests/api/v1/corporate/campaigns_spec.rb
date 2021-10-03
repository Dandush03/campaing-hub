# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Corporate::Campaigns', type: :request do
  let(:corporate) { FactoryBot.create(:corporate) }

  describe 'GET /index' do
    let!(:list_of_campaings) { FactoryBot.create_list(:campaign, 3) }
    let(:params) do
      list_of_campaings.map do |campaign|
        {
          'id' => campaign.id,
          'name' => campaign.name,
          'description' => campaign.description,
          'token' => campaign.token,
          'icon' => nil,
          'labels' => campaign.label_list
        }
      end
    end

    before(:each) { get api_v1_corporate_campaigns_path }

    context 'when no user', without_user: true do
      it 'prevent from user to fetch data' do
        expect(response.status).to eq(401)
      end
    end

    context 'when there is a user' do
      it 'get array of campaings' do
        expect(JSON.parse(body)).to eq(params)
      end
    end
  end
  pending "add some examples (or delete) #{__FILE__}"
end
