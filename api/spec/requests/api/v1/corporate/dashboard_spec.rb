# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Corporate::Dashboard', type: :request do
  let(:corporate) { FactoryBot.create(:corporate) }

  describe 'GET /index' do
    let(:params) do
      {
        'id' => corporate.id,
        'email' => corporate.user.email,
        'firstname' => corporate.firstname,
        'lastname' => corporate.lastname,
        'contact_type' => corporate.contact_type,
        'picture' => corporate.picture
      }
    end

    before(:each) { get api_v1_corporate_corporate_root_path }

    context 'when no user', without_user: true do
      it 'prevent from user to fetch data' do
        expect(response.status).to eq(401)
      end
    end

    context 'when there is a user' do
      it 'get user' do
        expect(JSON.parse(body)).to eq(params)
      end
    end
  end

  pending "add some examples to (or delete) #{__FILE__}"
end
