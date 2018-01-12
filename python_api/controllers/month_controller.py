import json
import os
import calendar

from flask_restful import Resource
from flask_restful import reqparse
from settings import APP_CALENDAR


class MonthController(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('month', type=int, required=True, choices=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        parser.add_argument('year', type=int, required=True)
        args = parser.parse_args()

        try:
            return json.load(open(self.calendar_file_name(args['month'], args['year'])))
        except FileNotFoundError:
            return {}

    def calendar_file_name(self, month, year):
        file_name = f"{year}_{calendar.month_name[month]}.json"
        return os.path.join(APP_CALENDAR, file_name)
