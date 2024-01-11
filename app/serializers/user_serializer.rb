class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :payments
  has_one :account
end
