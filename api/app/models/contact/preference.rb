# frozen_string_literal: true

class Contact
  class Preference < Tenant
    belongs_to :contact
  end
end
