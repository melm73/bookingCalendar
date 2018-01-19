from flask_restful import Resource
from lib.request_validator import RequestValidator
from flask import request
from lib.file_reader import FileReader
from lib.file_writer import FileWriter


class DayController(Resource):
    def post(self, year, month, day):
        RequestValidator().validate_day(year, month, day)

        # change the data for specified day
        saved_data = FileReader(year, month).read_file()
        data = request.json
        saved_data[f"{day}"] = data

        FileWriter(year, month).write_file(saved_data)

        return saved_data, 201
