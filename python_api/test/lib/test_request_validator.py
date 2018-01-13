import unittest

from lib.request_validator import RequestValidator
from werkzeug.exceptions import BadRequest


class TestRequestValidator(unittest.TestCase):
    def setUp(self):
        self.validator = RequestValidator()

    def test_raises_no_exception_for_valid_month_and_year(self):
        self.validator.validate_month(2011, 12)

    def test_raises_error_for_invalid_months(self):
        with self.assertRaises(BadRequest):
            self.validator.validate_month(2011, 0)

        with self.assertRaises(BadRequest):
            self.validator.validate_month(2011, -1)

        with self.assertRaises(BadRequest):
            self.validator.validate_month(2011, 13)
