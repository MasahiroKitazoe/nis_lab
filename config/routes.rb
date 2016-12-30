Rails.application.routes.draw do


  get '/philosophy' => 'pages#philosophy'

  get '/project' => 'pages#project'

  get '/stage' => 'pages#stage'

  get '/about' => 'pages#about'

  get '/script' => 'reviews#script'

  resources :reviews

  resources :pages, :only => :index

  root 'pages#index'
end
