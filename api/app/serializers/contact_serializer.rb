# frozen_string_literal: true

# Campaign Serializer
class ContactSerializer < ActiveModel::Serializer
  attributes(*%i[id email firstname lastname contact_type picture])

  def picture
    object.picture&.url
  end

  def email
    object.user.email
  end
end
