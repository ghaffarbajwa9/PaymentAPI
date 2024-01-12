class AccountSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :balance, :user_id
  belongs_to :user
  has_many :payments
end
