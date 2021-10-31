# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CompanyPreference, type: :model do
  it { should belong_to(:company) }
  it { should have_and_belong_to_many(:languages) }
  it { should have_and_belong_to_many(:countries) }
end
