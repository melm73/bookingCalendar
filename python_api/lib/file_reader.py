import calendar
import json

from urllib.request import urlopen
from settings import calendar_url
from urllib.error import HTTPError, URLError


class FileReader:
    def __init__(self, year, month):
        self.year = year
        self.month = month

    def read_file(self):
        try:
            return json.load(urlopen(calendar_url() + self.calendar_file_name()))
        except HTTPError as e:
            if e.code == 404:
                return {}
            raise e
        except URLError as e:
            if isinstance(e.args[0], FileNotFoundError):
                return {}
            raise e

    def calendar_file_name(self):
        return f"{self.year}_{calendar.month_name[self.month]}.json"
