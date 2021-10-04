# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Contact::Preference, type: :model do
  it { should belong_to(:contact) }
end
