module S3
  class Calendar
    BUCKET_NAME = 'moggs'
    AWS_REGION = 'us-east-1'

    def initialize
      @client = Aws::S3::Client.new(region: AWS_REGION)
    end

    def read(year:, month:)
      resp = @client.get_object(bucket: BUCKET_NAME, key: file_name(year, month))
      resp.body.read

    rescue Aws::S3::Errors::NoSuchKey
      empty_calendar
    end

    def write(year:, month:, json:)
      @client.put_object({
        body: json,
        bucket: BUCKET_NAME,
        key: file_name(year, month),
      })
    end

    private

    def file_name(year, month)
      "calendar/#{year}_#{month_name(month)}.json"
    end

    def month_name(month)
      Date::MONTHNAMES[month]
    end

    def empty_calendar
      "{}"
    end
  end
end
