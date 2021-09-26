# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :i18n, only: %i[show]
    end
  end
end
