# frozen_string_literal: true

Rails.application.routes.draw do
  constraints subdomain: /.*/ do
    devise_for :users

    namespace :api, defaults: { format: :json } do
      namespace :v1 do
        resource :i18n, only: %i[show update]
        resources :csrf, only: %i[index]
      end
    end
  end
end
