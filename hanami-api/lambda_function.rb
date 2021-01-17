# frozen_string_literal: true

require_relative "./aws/lambda"
require_relative "./app"
require "logger"
require 'aws-sdk-dynamodb'

$app ||= App.new
$logger ||= Logger.new($stdout)
$db_client ||= Aws::DynamoDB::Client.new

def lambda_handler(event:, context:)
  # Useful for debugging:
  #
  # $logger.info(event)
  # $logger.info(AWS::Lambda::Rack.env_for(event))

  AWS::Lambda.call($app, event, context)
end
