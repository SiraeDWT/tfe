from flask import Flask, render_template
from content import history

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/parcours")
def parcours():
    return render_template("pages/parcours.html", data=history)

@app.route("/records")
def records():
    return render_template("pages/records.html")

@app.route("/voitures")
def voitures():
    return render_template("pages/voitures.html")

@app.route("/credits")
def credits():
    return render_template("pages/credits.html")

@app.route("/sources")
def sources():
    return render_template("pages/sources.html")

if __name__ == "__main__":
    app.run(debug=True)