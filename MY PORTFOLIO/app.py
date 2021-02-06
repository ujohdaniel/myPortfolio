from flask import Flask
from flask-sqlalchemy import SQLAlchemy

app= Flask(__name__)

@app.route('/')
def Home():
    return 'red'

if __name__ == '__main__':
    app.run(debug=True)