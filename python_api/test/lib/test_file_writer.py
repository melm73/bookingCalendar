from unittest import TestCase
from unittest.mock import patch, Mock, mock_open
from lib.file_writer import FileWriter
# from botocore.stub import Stubber
# import boto3

class TestFileWriter(TestCase):

    @patch('lib.file_writer.local_calendar_url')
    @patch('builtins.open', new_callable=mock_open)
    @patch('boto3.client')
    def test_writes_to_local_file_with_correct_name_and_converts_to_json(self, boto3_mock, file_open_mock, calendar_url_mock):
        calendar_url_mock.return_value = '/fake_dir/'
        file_object_mock = Mock()
        file_object_mock.write.return_value = ''
        file_open_mock.return_value = file_object_mock

        FileWriter(2011, 12).write_file({'some': 'data'})

        file_open_mock.assert_called_with('/fake_dir/2011_December.json', 'w')
        file_object_mock.write.assert_called_with('{"some": "data"}')
        boto3_mock.upload.assert_called_with('/fake_dir/2011_December.json', 'moggs', '2011_December.json')
