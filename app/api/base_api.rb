require 'grape-swagger'
# require 'doorkeeper/grape/helpers'

class BaseAPI < API
  format :json

  helpers do
    def declared_params
      declared(params)
    end
  end

  rescue_from CommandValidationError do |e|
    error!(e.errors, 422)
  end

  # helpers AuthHelpers
  mount PlacesAPI => '/places'

  add_swagger_documentation base_path: '/api',
                            info: {
                              title: 'Dzieciaki w Warszawie API'
                            }
end
