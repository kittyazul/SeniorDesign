from flask import Flask, render_template

application = Flask(__name__)

@application.route('/')
def display():
    return render_template('Test.html')

