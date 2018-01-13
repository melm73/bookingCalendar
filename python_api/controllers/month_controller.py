import json
import calendar

from urllib.request import urlopen
from urllib.error import HTTPError, URLError
from flask_restful import Resource
from settings import CALENDAR_URL
from lib.request_validator import RequestValidator


class MonthController(Resource):
    def get(self, year, month):
        RequestValidator().validate_month(year, month)

        try:
            return json.load(urlopen(self.calendar_file_name(month, year)))

        except HTTPError as e:
            if e.code == 404:
                return {}
            raise e

        except URLError as e:
            if isinstance(e.args[0], FileNotFoundError):
                return {}
            raise e

    def calendar_file_name(self, month, year):
        return CALENDAR_URL + f"{year}_{calendar.month_name[month]}.json"
