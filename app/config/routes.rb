Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: 'omniauth_callbacks'
  }

  resources :users, only: [:update]
  
  # root 'users#index'
  root to: 'home#index'
end
