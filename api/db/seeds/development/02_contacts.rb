# frozen_string_literal: true

Company.all.each_with_index do |company, index|
  Tenant.switch(company.subdomain)
  break if User.any? && Contact.any?

  puts "Seeding Contacts in #{Rails.env.capitalize}" if index.zero?
  test_company = index.zero? ? '' : '_test'
  super_admin_user = User.create_with(
    {
      username: "dandush#{test_company}",
      password: '123123',
      password_confirmation: '123123'
    }
  ).find_or_create_by(email: "d.laloush#{test_company}@outlook.com")

  super_admin_user.create_contact!(
    {
      firstname: "Daniel#{test_company}",
      lastname: "Laloush#{test_company}",
      contact_type: 'super_admin'
    }
  )

  advocate = User.create_with(
    {
      username: "demo#{test_company}",
      password: '123123',
      password_confirmation: '123123'
    }
  ).find_or_create_by(email: "demo#{test_company}@demo.com")

  advocate.create_contact(
    {
      firstname: "Demo#{test_company}",
      lastname: "First#{test_company}",
      contact_type: 'advocate'
    }
  )
end
