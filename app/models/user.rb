class User < ApplicationRecord
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token


  has_many :cart_items,
    foreign_key: :userId,
    class_name: :CartItem

  has_many :products_in_cart,
    through: :cart_items,
    source: :products

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    if user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end 
end
