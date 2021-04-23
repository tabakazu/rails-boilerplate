source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.3'

gem 'rails', '~> 6.0.3', '>= 6.0.3.2'

gem 'mysql2', '>= 0.4.4'
gem 'puma', '~> 4.1'

gem 'activerecord-session_store'
gem 'config'
gem 'enum_help'
gem 'jbuilder', '~> 2.7'
gem 'react-rails'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 5.x'

gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'bullet'
  gem 'factory_bot_rails'
  gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'master'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'rspec-rails', '~> 4.0.0'

  gem 'byebug', platforms: %i(mri mingw x64_mingw)
end

group :development do
  gem 'annotate'
  gem 'letter_opener_web', '~> 1.0'
  gem 'rack-mini-profiler', require: false
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
  gem 'simplecov', require: false
end

gem 'tzinfo-data', platforms: %i(mingw mswin x64_mingw jruby)
