class PaymentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :date, :account_id, :user_id
  belongs_to :user
  belongs_to :account
end
