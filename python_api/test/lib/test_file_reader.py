from unittest import TestCase
from unittest.mock import patch, Mock
from lib.file_reader import FileReader
from urllib.error import HTTPError, URLError


class TestFileReader(TestCase):

    @patch('lib.file_reader.urlopen')
    @patch('lib.file_reader.calendar_url')
    def test_reads__local_file_with_correct_name_and_converts_from_json(self, calendar_url_mock, urlopen_mock):
        calendar_url_mock.return_value = 'http://fake_url/'
        file_read_mock = Mock()
        file_read_mock.read.return_value = '{"14":{"public_holiday":null}}'
        urlopen_mock.return_value = file_read_mock

        data = FileReader(2011, 11).read_file()

        urlopen_mock.assert_called_with('http://fake_url/2011_November.json')
        self.assertEqual(data, {'14': {'public_holiday': None}})

    @patch('lib.file_reader.urlopen', side_effect=HTTPError('url', 404, 'Not Found', None, None))
    @patch('lib.file_reader.calendar_url')
    def test_return_empty_object_when_url_does_not_exist(self, calendar_url_mock, urlopen_mock):
        calendar_url_mock.return_value = 'http://fake_url/'

        data = FileReader(2011, 11).read_file()

        urlopen_mock.assert_called_with('http://fake_url/2011_November.json')
        self.assertEqual(data, {})

    @patch('lib.file_reader.urlopen', side_effect=URLError(FileNotFoundError(2, 'No such file or directory'), 'filename'))
    @patch('lib.file_reader.calendar_url')
    def test_return_empty_object_when_file_not_found(self, calendar_url_mock, urlopen_mock):
        calendar_url_mock.return_value = 'http://fake_url/'

        data = FileReader(2011, 11).read_file()

        urlopen_mock.assert_called_with('http://fake_url/2011_November.json')
        self.assertEqual(data, {})

    @patch('lib.file_reader.urlopen', side_effect=Exception())
    @patch('lib.file_reader.calendar_url')
    def test_raises_any_other_error(self, calendar_url_mock, urlopen_mock):
        calendar_url_mock.return_value = 'http://fake_url/'

        with self.assertRaises(Exception):
            FileReader(2011, 11).read_file()
