#!/usr/bin/env ruby
require 'rack'
require 'rack/cors'

load 'application.rb'

use Rack::Cors do
  allow do
    origins 'localhost:3000', 'localhost:9292'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

run Application.new
