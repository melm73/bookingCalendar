from flask import Flask
from flask_restful import Api
from controllers.day_controller import DayController
from controllers.month_controller import MonthController

app = Flask(__name__)
api = Api(app)

api.add_resource(DayController, '/year/<int:year>/month/<int:month>/day/<int:day>')
api.add_resource(MonthController, '/year/<int:year>/month/<int:month>')

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8080)
