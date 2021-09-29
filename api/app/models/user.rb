# frozen_string_literal: true

class User < AppUser
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :lockable, :timeoutable, :trackable,
         authentication_keys: %i[login]

  has_one :contact, class_name: 'Contact', foreign_key: 'user_id'

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
