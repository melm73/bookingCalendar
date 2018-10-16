require 'aws-sdk-s3'
require_relative '../s3/calendar'

module Api
  module Days
    class << self
      def all_for_month(year:, month:)
        calendar.read(year: year, month: month)
      end

      def update(year:, month:, day:, request_body:)
        current_month = JSON.parse(all_for_month(year: year, month: month))
        new_day = JSON.parse(request_body)
        current_month[day.to_s] = new_day

        calendar.write(year: year, month: month, json: current_month.to_json)
      end

      private

      def calendar
        @calendar ||= S3::Calendar.new
      end
    end
  end
end
