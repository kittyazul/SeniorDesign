from flask import Flask, render_template

application = Flask(__name__)

@application.route('/')
@application.route('/<page_name>')
def display(page_name=None):
    if page_name is None:
        return render_template('Index.html')
    else:
        return render_template(page_name)

