# frozen_string_literal: true

require_relative "./aws/lambda"
require_relative "./app"
require "logger"

$app ||= App.new
$logger ||= Logger.new($stdout)

def lambda_handler(event:, context:)
  # Useful for debugging:
  #
  # $logger.info(event)
  # $logger.info(AWS::Lambda::Rack.env_for(event))

  AWS::Lambda.call($app, event, context)
end
