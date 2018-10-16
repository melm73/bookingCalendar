require 'sinatra/base'
require_relative 'lib/api/days'

class Application < Sinatra::Base
  set :port, 8080

  get '/year/:year/month/:month/days' do
    year = params[:year].to_i
    month = params[:month].to_i

    respond_with(Api::Days.all_for_month(year: year, month: month))
  end

  put '/year/:year/month/:month/day/:day' do
    year = params[:year].to_i
    month = params[:month].to_i
    day = params[:day].to_i

    Api::Days.update(year: year, month: month, day: day, request_body: request_body)
    respond_with(nil)
  end

  private

  def respond_with(json)
    [200, { 'Content-Type' => 'application/vnd.api+json' }, json]
  end

  def request_body
    @request_body ||= request.body.read
  end
end
