from flask import Flask, render_template

# print a nice greeting.
def say_hello(username = "World"):
    return '<p>Hello %s!</p>\n' % username

# EB looks for an 'application' callable by default.
application = Flask(__name__)

# some bits of text for the page.
header_text = '''
<html><head><title>Home page</title></head>'''
instructions = '''
<body><p>Eventuallllllyyyyyyyyyyyyyyyyyyyy</p></body></html> '''


#@application.route('/')
#def main():
 #   return render_template("Test.html")

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = False
    application.run()