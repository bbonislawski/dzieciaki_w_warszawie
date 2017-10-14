# Doorkeeper.configure do
#   orm :active_record
#   use_refresh_token

#   resource_owner_authenticator do
#     current_user
#   end

#   resource_owner_from_credentials do
#     user = User.find_for_database_authentication(email: params[:email])
#     user if user && user.valid_for_authentication? { user.valid_password?(params[:password]) }
#   end

#   use_refresh_token

#   grant_flows %w(password)

#   access_token_methods :from_bearer_authorization, :from_access_token_param
# end
