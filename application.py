from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import requests
import json
import os
import webbrowser
application = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return ''
  '''  return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')'''

@application.route('/scan', methods=['GET', 'POST'])
def scan(ScanURL=None):
    if request.method == 'GET' and not ScanURL:
        return render_template('D-Phish.html')
    if request.method =='POST':
        if 'CheckURL' in request.form:
            ScanURL = request.form['ScanURL']
        if ScanURL == '':
            return render_template('D-Phish.html')
    else:
        return render_template('D-Phish.html')		
    url = 'https://www.virustotal.com/vtapi/v2/url/scan'
    params = {'apikey': os.getenv('VirusTotalApi'), 'url':ScanURL}
    response = requests.post(url, data=params)
    return redirect(response.json()['permalink'])
    #print(json.dumps(response.json(), indent=4, sort_keys=True))

@application.route('/')
@application.route('/<page_name>')
def display(page_name=None):
    if page_name is None:
        return render_template('Index.html')
    else:
        return render_template(page_name)

