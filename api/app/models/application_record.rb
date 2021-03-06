# frozen_string_literal: true

class ApplicationRecord < ActiveRecord::Base
  include PgRls::SecureConnection

  self.abstract_class = true
end
