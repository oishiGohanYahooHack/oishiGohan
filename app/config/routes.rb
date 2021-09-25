Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks'
  }

  resources :users, only: [:update]
  
  # root 'users#index'
  root to: 'home#index'
end
