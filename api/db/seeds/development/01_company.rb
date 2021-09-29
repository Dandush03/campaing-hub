# frozen_string_literal: true

require 'factory_bot_rails'

return if Company.any?

puts "Seeding Companies in #{Rails.env.capitalize}"

FactoryBot.create(:company, subdomain: 'app')
FactoryBot.create(:company, subdomain: 'test')
