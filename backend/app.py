from flask import Flask, render_template
from content import history
from call import get_top_champions, get_top_winners, get_top_poles, get_top_podiums, get_top_wins_with_team

for pilot in get_top_poles():
    print(pilot)

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route("/")
def index():
    return render_template("index.html", body_class="body__home")

@app.route("/parcours")
def parcours():
    return render_template("pages/parcours.html", body_class="body__parcours", data=history)

@app.route("/records")
def records():
    champions = get_top_champions()
    winners = get_top_winners()
    poles = get_top_poles()
    podiums = get_top_podiums()
    team_wins = get_top_wins_with_team()
    return render_template("pages/records.html", body_class="body__records", champions=champions, winners=winners, poles=poles, podiums=podiums, team_wins=team_wins)

@app.route("/voitures")
def voitures():
    return render_template("pages/voitures.html", body_class="body__voitures")

@app.route("/credits")
def credits():
    return render_template("pages/credits.html", body_class="body__credits")

@app.route("/sources")
def sources():
    return render_template("pages/sources.html", body_class="body__sources")

if __name__ == "__main__":
    app.run(debug=True)