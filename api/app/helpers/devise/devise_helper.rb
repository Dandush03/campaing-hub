# frozen_string_literal: true

module Devise
  # Devise Views Helper
  module DeviseHelper
    ALLOWED_PROVIDER = {
      google_oauth2: 'Google',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
    }.freeze
    def humanize_provider(provider)
      ALLOWED_PROVIDER[provider]
    end
  end
end
