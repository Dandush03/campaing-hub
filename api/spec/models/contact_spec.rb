# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contact, type: :model do
  it { should belong_to(:user) }

  it { should validate_presence_of(:firstname) }
  it { should validate_presence_of(:lastname) }
  it { should validate_presence_of(:contact_type) }

  it { should validate_length_of(:firstname).is_at_least(3).is_at_most(50) }
  it { should validate_length_of(:lastname).is_at_least(3).is_at_most(50) }

  it { should validate_inclusion_of(:contact_type).in_array(%w[advocate admin super_admin]) }
end
