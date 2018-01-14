from flask_restful import Resource
from lib.request_validator import RequestValidator
from lib.file_reader import FileReader


class MonthController(Resource):
    def get(self, year, month):
        RequestValidator().validate_month(year, month)
        return FileReader(year, month).read_file()
