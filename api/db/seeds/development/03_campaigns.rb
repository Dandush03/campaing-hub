# frozen_string_literal: true

require 'factory_bot_rails'

Company.all.each_with_index do |company, index|
  Tenant.switch(company.subdomain)
  break if Campaign.any?

  puts "Seeding Campaigns in #{Rails.env.capitalize}" if index.zero?

  campaings = FactoryBot.create_list(:campaign, 3, :new)

  campaings.each do |campaing|
    FactoryBot.create_list(:visual_medium, 3, gallery: campaing)
  end
end
