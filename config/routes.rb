Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do 
      resources :cart_items, only: [:create, :destroy, :index, :update]
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:create, :destroy, :edit, :show, :index]
    end
  end

end
