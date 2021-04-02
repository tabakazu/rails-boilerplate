source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

gem 'rails', '~> 6.0.3', '>= 6.0.3.2'

gem 'mysql2', '>= 0.4.4'
gem 'puma', '~> 4.1'

gem 'jbuilder', '~> 2.7'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 5.x'

gem 'bootsnap', '>= 1.4.2', require: false

gem 'config'

group :development, :test do
  gem 'factory_bot_rails'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 4.0.0'

  gem 'byebug', platforms: %i(mri mingw x64_mingw)
end

group :development do
  gem 'letter_opener_web', '~> 1.0'
  gem 'rubocop-rails', require: false

  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'email_spec'
  gem 'rspec-collection_matchers'
  gem 'rspec-json_matcher'
  gem 'shoulda-matchers'
end

gem 'tzinfo-data', platforms: %i(mingw mswin x64_mingw jruby)
