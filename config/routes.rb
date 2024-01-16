Rails.application.routes.draw do
  resources :authentications
  get 'home/index'
  root "home#index"
  # post '/users',         to: 'users#create'
  # get '/users/:user_id', to: 'users#show'
  # get '/users',          to: 'users#index'
  post 'api/v1/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  # post '/login', to: 'authentication#authenticate'


  namespace :api do 
    namespace :v1 do 
      resources :users, only: [:index, :show, :create, :edit, :update, :destroy ]
      resources :accounts, only: [:index, :show, :create, :edit, :update, :destroy ]
      resources :payments, only: [:index, :show, :create, :edit, :update, :destroy ]
    end
  end


get "*path", to: 'home#index', via: :all
get "up" => "rails/health#show", as: :rails_health_check

 
end
