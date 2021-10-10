# frozen_string_literal: true

class Contact
  class Preference < ApplicationRecord
    belongs_to :contact
  end
end
