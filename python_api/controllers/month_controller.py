import json
import os
import calendar


from flask_restful import Resource
from werkzeug.exceptions import BadRequest
# from flask_restful import reqparse
from settings import APP_CALENDAR


class MonthController(Resource):
    def get(self, year, month):
        self.validate_args(year, month)
        try:
            return json.load(open(self.calendar_file_name(month, year)))
        except FileNotFoundError:
            return {}

    def calendar_file_name(self, month, year):
        file_name = f"{year}_{calendar.month_name[month]}.json"
        return os.path.join(APP_CALENDAR, file_name)

    def validate_args(self, year, month):
        if month < 1 or month > 12:
            raise BadRequest({ 'month': 'Month must be between 1 and 12' })
