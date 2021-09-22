# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Picture, type: :model do
  it { should belong_to(:gallery) }

  it { should validate_presence_of(:signature) }
  it { should validate_presence_of(:filename) }
  it { should validate_presence_of(:url) }

  it { should validate_length_of(:title).is_at_least(3).is_at_most(50).allow_blank }

  it { should validate_numericality_of(:rank) }
end
