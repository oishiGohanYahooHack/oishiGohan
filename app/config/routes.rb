Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'omniauth_callbacks'
  }

  resources :maps
  root 'users#index'
  # root to: 'home#index'
end
