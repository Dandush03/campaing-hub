# frozen_string_literal: true

require 'factory_bot_rails'

return if Company.any?

puts "Seeding Companies in #{Rails.env.capitalize}"

FactoryBot.create(:company, subdomain: 'app', name: 'The Lead Maker')
FactoryBot.create(:company, subdomain: 'test', name: 'Tester')
FactoryBot.create(:company, subdomain: 'ndm', name: 'NDM Law Firm and Associates')
