# frozen_string_literal: true

Rails.application.routes.draw do
  constraints subdomain: /.*/ do
    namespace :api, defaults: { format: :json } do
      namespace :v1 do
        namespace :corporate do
          root to: 'dashboard#show', as: :corporate_root

          resources :campaigns, only: %i[index create update]
        end
      end
    end
  end
end
