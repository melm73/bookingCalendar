import os

S3_BUCKET_URL = 'http://s3.amazonaws.com/moggs/calendar/'

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
LOCAL_CALENDAR_URL = 'file://' + os.path.join(APP_ROOT, 'calendar/')

CALENDAR_URL = LOCAL_CALENDAR_URL


def calendar_url():
    return LOCAL_CALENDAR_URL
