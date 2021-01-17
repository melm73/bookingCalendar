# frozen_string_literal: true

require_relative "./app"
require 'rack/cors'
require 'aws-sdk-dynamodb'

use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: :any
  end
end

$db_client ||= Aws::DynamoDB::Client.new(
  region: 'us-west',
  access_key_id: 'id',
  secret_access_key: 'secret',
  endpoint: "http://localhost:8000"
)

run App.new
