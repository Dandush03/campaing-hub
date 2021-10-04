# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaign, type: :model do
  it { should have_many(:visual_media) }

  it { should have_one(:icon) }
  it { should have_one(:logo) }
  it { should have_one(:background) }

  it { should validate_presence_of(:name) }

  it { should validate_length_of(:name).is_at_least(3).is_at_most(50) }
  it { should validate_length_of(:description).is_at_least(3).is_at_most(255).allow_blank }

  it { should have_secure_token(:token) }

  describe 'translatable multilingual' do
    include_examples 'translatable_fields', :campaign, :name
    include_examples 'translatable_fields', :campaign, :description
  end
end
