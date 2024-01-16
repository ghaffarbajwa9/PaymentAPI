class User < ApplicationRecord
  # belongs_to :account
  has_one :account
  has_many :payments
  has_secure_password
  
  validates_presence_of :name, :email, :password_digest

end
