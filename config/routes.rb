Rails.application.routes.draw do
  get 'home/index'
  root "home#index"

  namespace :api do 
    namespace :v1 do 
      resources :accounts, only: [:index, :show, :create, :edit, :update, :destroy ]
      resources :users, only: [:index, :show, :create, :edit, :update, :destroy ]
      resources :payments, only: [:index, :show, :create, :edit, :update, :destroy ]
    end
  end


get "*path", to: 'home#index', via: :all
  get "up" => "rails/health#show", as: :rails_health_check

 
end
