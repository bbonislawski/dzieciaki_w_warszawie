source 'https://rubygems.org'
ruby '2.4.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'arkency-command_bus'
# gem 'devise'
# gem 'doorkeeper'
gem 'grape', '1.0.0'
gem 'grape-active_model_serializers'
gem 'grape-swagger'
gem 'grape-swagger-rails'
gem 'hanami-validations'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
# gem 'pundit'
gem 'rack-cors'
gem 'rails', '~> 5.1.3'
gem 'rubocop', require: false
gem 'sass-rails', '~> 5.0'
gem 'signet'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'ransack'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.5'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
end

group :test do
  gem 'simplecov', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
