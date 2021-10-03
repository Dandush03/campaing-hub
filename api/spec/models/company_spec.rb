# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Company, type: :model do
  it { should have_many(:users).dependent(:destroy) }
  it { should have_many(:campaigns).dependent(:destroy) }
  it { should have_many(:visual_media).dependent(:destroy) }
  it { should have_many(:contacts).dependent(:destroy) }

  it { should validate_presence_of(:name) }
  it { should have_secure_token(:identification) }

  it { should validate_uniqueness_of(:subdomain) }
end
