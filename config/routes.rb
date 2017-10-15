Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  # devise_for :users
  # use_doorkeeper
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount BaseAPI => '/api/'

  mount GrapeSwaggerRails::Engine => '/swagger'

  get '/' => 'vue#index'
  get '/*path' => 'vue#index'
end
