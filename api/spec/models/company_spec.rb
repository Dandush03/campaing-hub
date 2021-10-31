# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Company, type: :model do
  it { should have_one(:company_preference).dependent(:destroy) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:subdomain) }

  it { should validate_uniqueness_of(:name) }
  it { should validate_uniqueness_of(:subdomain) }
end
