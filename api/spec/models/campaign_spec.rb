# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Campaign, type: :model do
  it { should have_many(:visual_medium) }

  it { should validate_presence_of(:name) }

  it { should validate_length_of(:name).is_at_least(3).is_at_most(50) }
  it { should validate_length_of(:description).is_at_least(3).is_at_most(255).allow_blank }

  it { should have_secure_token(:token) }
end
