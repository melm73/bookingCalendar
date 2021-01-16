# frozen_string_literal: true

require "rack"
require "json"
require "stringio"
require "base64"

module AWS
  module Lambda
    # Adapted from https://github.com/aws-samples/serverless-sinatra-sample/blob/master/lambda.rb
    #
    # rubocop:disable Metrics/MethodLength
    module Rack
      def self.env_for(event)
        headers = event.fetch("headers", {})
        body = body_for(event)

        env = {
          "REQUEST_METHOD" => event.dig("requestContext", "http", "method") || "GET",
          "SCRIPT_NAME" => "",
          "PATH_INFO" => event["rawPath"] || "/",
          "QUERY_STRING" => event["rawQueryString"], #::Rack::Utils.build_query(event["rawQueryString"] || ""),
          "SERVER_NAME" => event.dig("requestContext", "domainName") || "localhost",
          "SERVER_PORT" => headers.fetch("x-forwarded-port", 443).to_s,
          "rack.version" => ::Rack::VERSION,
          "rack.url_scheme" => headers.fetch("x-forwarded-proto", "https"),
          "rack.input" => StringIO.new(body),
          "rack.errors" => $stderr
        }

        merge_headers!(headers, env)
      end

      def self.success(response)
        {
          statusCode: response[0],
          headers: response[1],
          body: response[2].map(&:to_s).join
        }
      end

      def self.failure(exception)
        {
          statusCode: 500,
          body: exception.message
        }
      end

      def self.body_for(event)
        case body = event["body"]
        when String
          if event["isBase64Encoded"]
            Base64.decode64(body)
          else
            body
          end
        when Hash, Array
          # FIXME: It looks like that when request header `Content-Type: "application/json"` is set
          # AWS Lambda already parses `body:` into a Ruby Hash/Array.
          #
          # Because this method suppose to return a String to create the `"rack.input"` value in Rack env,
          # we're forced to serialize again body into JSON, so it can be parsed properly again by the Hanami::Middleware::BodyParser.
          #
          # This is inefficient, and should be worked around.
          JSON.generate(body)
        else
          ""
        end
      end

      # Code from https://github.com/aws-samples/serverless-sinatra-sample/blob/master/lambda.rb
      def self.merge_headers!(headers, env)
        headers.each do |key, value|
          # "CloudFront-Forwarded-Proto" => "CLOUDFRONT_FORWARDED_PROTO"
          # Content-Type and Content-Length are handled specially per the Rack SPEC linked above.
          name = key.upcase.gsub "-", "_"
          header = case name
                   when "CONTENT_TYPE", "CONTENT_LENGTH"
                     name
                   else
                     "HTTP_#{name}"
                   end

          env[header] = value.to_s
        end

        env
      end
    end
    # rubocop:enable Metrics/MethodLength
  end
end

#
# {
#   "version":"2.0",
#   "routeKey":"GET /moggs-booking-calendar/api/v1/calendar",
#   "rawPath":"/moggs-booking-calendar/api/v1/calendar",
#   "rawQueryString":"",
#   "headers":{
#     "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
#     "accept-encoding":"gzip, deflate, br",
#     "accept-language":"en-US,en;q=0.9",
#     "content-length":"0",
#     "host":"web.matthews.haus",
#     "sec-ch-ua":"\"Google Chrome\";v=\"87\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"87\"",
#     "sec-ch-ua-mobile":"?0",
#     "sec-fetch-dest":"document",
#     "sec-fetch-mode":"navigate",
#     "sec-fetch-site":"none",
#     "sec-fetch-user":"?1",
#     "upgrade-insecure-requests":"1",
#     "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
#     "x-amzn-trace-id":"Root=1-60025db0-366619ca73ae414d18b1ae41",
#     "x-forwarded-for":"180.150.39.97",
#     "x-forwarded-port":"443",
#     "x-forwarded-proto":"https"
#   },
#   "requestContext":{
#     "accountId":"488571014441",
#     "apiId":"1ln8uxc6q5",
#     "domainName":"web.matthews.haus",
#     "domainPrefix":"web",
#     "http":{
#       "method":"GET",
#       "path":"/moggs-booking-calendar/api/v1/calendar",
#       "protocol":"HTTP/1.1",
#       "sourceIp":"180.150.39.97",
#       "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
#     },
#     "requestId":"ZOOTjhVxIAMEVcA=",
#     "routeKey":"GET /moggs-booking-calendar/api/v1/calendar",
#     "stage":"$default",
#     "time":"16/Jan/2021:03:29:52 +0000",
#     "timeEpoch":1610767792282
#   },
#   "isBase64Encoded":false
# }
