class User < ApplicationRecord
  # belongs_to :account
  has_one :account
  has_many :payments
  has_secure_password
end
