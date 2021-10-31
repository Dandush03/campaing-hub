# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Language, type: :model do
  before(:each) { FactoryBot.create(:language) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:code) }

  it { should validate_uniqueness_of(:name) }
  it { should validate_uniqueness_of(:code) }

  it { should have_and_belong_to_many(:company_preferences) }
end
