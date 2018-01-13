from werkzeug.exceptions import BadRequest


class RequestValidator:
    def validate_month(self, year, month):
        if month < 1:
            raise BadRequest({ 'month': 'Month must be between 1 and 12' })
        if month > 12:
            raise BadRequest({ 'month': 'Month must be between 1 and 12' })
