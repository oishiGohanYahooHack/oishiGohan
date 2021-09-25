Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks'
  }
  resources :actions
  resources :maps
  resources :users, only: [:update]
  root to: 'home#index'
end
