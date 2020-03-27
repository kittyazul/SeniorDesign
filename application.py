from flask import Flask, render_template, request, redirect, url_for
import requests
import json
application = Flask(__name__)


@application.route('/scan', methods=['GET', 'POST'])
def scan(ScanURL=None):
    if request.method == 'GET' and not ScanURL:
        return render_template('D-Phish.html')
    if request.method =='POST':
        if 'ScanURL' in request.form:
            ScanURL = request.form['ScanURL']
        if ScanURL == '':
            return render_template('D-Phish.html')
    else:
        return render_template('D-Phish.html')		
    url = 'https://www.virustotal.com/vtapi/v2/url/scan'
    params = {'apikey': 'VirusTotalApi', 'url':ScanURL}
    response = requests.post(url, data=params)
    return redirect(response.json()['permalink'])
    #print(json.dumps(response.json(), indent=4, sort_keys=True))


@application.route('/<page_name>')
def display(page_name=None):
    if page_name is None:
        return render_template('Index.html')
    else:
        return render_template(page_name)

