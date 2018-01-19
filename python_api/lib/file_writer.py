import calendar
import json
import boto3

from settings import local_calendar_url


class FileWriter:
    def __init__(self, year, month):
        self.year = year
        self.month = month

    def write_file(self, data):
        json_string = json.dumps(data)
        f = open(self.calendar_file_name(), 'w')
        f.write(json_string)
        f.close()

        s3 = boto3.client('s3')
        s3.upload_file(self.calendar_file_name(), 'moggs', 'calendar/' + self.base_file_name())

    def calendar_file_name(self):
        return local_calendar_url() + self.base_file_name()

    def base_file_name(self):
        return f"{self.year}_{calendar.month_name[self.month]}.json"
