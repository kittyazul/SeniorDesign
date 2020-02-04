from app import app
from flask import request
from flask import render_template

@app.route('/')
def main():
    return render_template("Templates.html")
