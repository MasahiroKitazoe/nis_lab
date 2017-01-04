Rails.application.routes.draw do



  get '/project' => 'pages#project'

  get '/stage' => 'pages#stage'

  get '/about' => 'pages#about'

  get '/reviews/download' => 'reviews#download'

  resources :reviews, shallow: true do
    resources :replies
  end

  resources :pages, :only => :index

  root 'pages#index'
end
