from werkzeug.exceptions import BadRequest
from datetime import date


class RequestValidator:
    @staticmethod
    def validate_month(_year, month):
        if month < 1:
            raise BadRequest({'month': 'Month must be between 1 and 12'})
        if month > 12:
            raise BadRequest({'month': 'Month must be between 1 and 12'})

    def validate_day(self, year, month, day):
        self.validate_month(year, month)
        try:
            date(year, month, day)
        except ValueError:
            raise BadRequest({'date': 'Invalid date'})
