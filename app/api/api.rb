class API < Grape::API
  version 'v1', using: :path
  format :json
  formatter :json, Grape::Formatter::ActiveModelSerializers
end
