require 'factory_bot_rails'

return if Campaign.any?

puts "Seeding Campaigns in #{Rails.env.capitalize}"

campaings = FactoryBot.create_list(:campaign, 3, :new)

campaings.each do |campaing|
  FactoryBot.create_list(:visual_medium, 3, gallery: campaing)
end
