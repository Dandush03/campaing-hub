# frozen_string_literal: true

class User < ApplicationRecord
  attr_writer :login

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :lockable, :timeoutable, :trackable, :omniauthable,
         omniauth_providers: %i[google_oauth2 linkedin facebook],
         authentication_keys: %i[login]

  has_one :contact, class_name: 'Contact', foreign_key: 'user_id'

  # Allow same email for diferent tenant
  validates :email, presence: true, uniqueness: { case_sensitive: true, scope: :tenant_id }

  # Login With Username or email by tenant
  def login
    @login || username || email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if (login = conditions.delete(:login))
      where(conditions.to_h).where(['lower(username) = :value OR lower(email) = :value',
                                    { value: login.downcase }]).first
    elsif conditions.key?(:username) || conditions.key?(:email)
      where(conditions.to_h).first
    end
  end

  # update without password
  def update_with_password(params, *_options)
    current_password = params.delete(:current_password)

    password_blank

    result = assing_attr(current_password)

    clean_up_passwords
    result
  end

  private

  def password_blank
    return unless params[:password].blank?

    params.delete(:password)
    params.delete(:password_confirmation) if params[:password_confirmation].blank?
  end

  def assing_attr(current_password)
    if params[:password].blank? || valid_password?(current_password)
      update_attributes(params, *options)
    else
      assign_attributes(params, *options)
      valid?
      errors.add(:current_password, current_password.blank? ? :blank : :invalid)
      false
    end
  end
end
