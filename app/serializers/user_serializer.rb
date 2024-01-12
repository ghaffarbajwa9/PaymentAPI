class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :account_id
  has_many :payments
  has_one :account
end
