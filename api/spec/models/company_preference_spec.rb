# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CompanyPreference, type: :model do
  it { should belong_to(:company) }
end
