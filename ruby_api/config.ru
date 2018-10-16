#!/usr/bin/env ruby
require 'rack'
load 'application.rb'

run Application.new
