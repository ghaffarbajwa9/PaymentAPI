if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_paymentapi', domain: 'paymentapi-api'
else
    Rails.application.config.session_store :cookie_store, key: '_paymentapi'
end