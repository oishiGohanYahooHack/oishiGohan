Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: 'omniauth_callbacks'
  }
  resources :actions
  resources :maps
  resources :users, only: [:update]
  root to: 'home#index'
end
