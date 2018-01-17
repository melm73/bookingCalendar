from flask_restful import Resource


class DayController(Resource):
    def post(self, year, month, day):
        return {'year': year, 'month': month, 'day': day}, 201
