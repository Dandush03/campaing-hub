# frozen_string_literal: true

# Extend contact model
class Corporate < Contact
  before_save :default_values

  def default_values
    self.contact_type = 'corporate'
  end
end
