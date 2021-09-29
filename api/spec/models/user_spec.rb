# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it { should belong_to(:company) }
  pending "add some examples to (or delete) #{__FILE__}"
end
