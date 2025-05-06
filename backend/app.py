from flask import Flask, render_template
from content import history
from call import get_top_champions

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/parcours")
def parcours():
    return render_template("pages/parcours.html", main_class="main__parcours", body_class="body__parcours", data=history)

@app.route("/records")
def records():
    champions = get_top_champions()
    return render_template("pages/records.html", champions=champions)

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