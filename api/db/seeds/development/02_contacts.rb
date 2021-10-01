# frozen_string_literal: true

Company.all.each_with_index do |company, index|
  Tenant.switch(company.subdomain)
  break if User.any? && Contact.any?

  puts "Seeding Contacts in #{Rails.env.capitalize}" if index.zero?
  super_admin_user = User.create_with(
    {
      username: 'dandush',
      password: '123123',
      password_confirmation: '123123'
    }
  ).find_or_create_by(email: 'd.laloush@outlook.com')

  super_admin_user.create_contact!(
    {
      firstname: 'Daniel',
      lastname: 'Laloush',
      contact_type: 'super_admin'
    }
  )

  advocate = User.create_with(
    {
      username: 'demo',
      password: '123123',
      password_confirmation: '123123'
    }
  ).find_or_create_by(email: 'demo@demo.com')

  advocate.create_contact(
    {
      firstname: 'Demo',
      lastname: 'First',
      contact_type: 'advocate'
    }
  )
end
