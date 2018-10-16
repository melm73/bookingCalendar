require 'aws-sdk-s3'
require_relative '../s3/calendar'

module Api
  module Days
    class << self
      def all_for_month(year:, month:)
        calendar = S3::Calendar.new
        calendar.read(year: year, month: month)
      end

      def udpate(year:, month:, day:, data:)

      end
    end
  end
end
