require 'sinatra/base'

class Application < Sinatra::Base
  set :port, 8080

  get "/" do
    "Hello World!"
  end
end
