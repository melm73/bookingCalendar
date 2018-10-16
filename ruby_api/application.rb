require 'sinatra/base'
require_relative 'lib/api/days'

class Application < Sinatra::Base
  set :port, 8080

  get '/year/:year/month/:month/days' do

    year = params[:year].to_i
    month = params[:month].to_i

    respond_with(Api::Days.all_for_month(year: year, month: month))
  end

  private

  def respond_with(json)
    [200, { 'Content-Type' => 'application/vnd.api+json' }, json]
  end
end
