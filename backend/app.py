from flask import Flask, render_template
from content import history
from call import get_top_champions, get_top_winners, get_top_poles, get_top_podiums, get_top_wins_with_team, get_top_wins_on_circuit, get_top_unique_circuit_winners, get_top_races_led, get_top_points, get_top_laps_led, get_top_hat_tricks, get_top_team_loyalty, get_summary_records


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
    wins_on_circuit = get_top_wins_on_circuit()
    unique_circuits = get_top_unique_circuit_winners()
    led_races = get_top_races_led()
    career_points = get_top_points()
    laps_led = get_top_laps_led()
    hat_tricks = get_top_hat_tricks()
    team_loyalty = get_top_team_loyalty()
    summary_records = get_summary_records()

    return render_template("pages/records.html", body_class="body__records", champions=champions, winners=winners, poles=poles, podiums=podiums, team_wins=team_wins, wins_on_circuit=wins_on_circuit, unique_circuits=unique_circuits, led_races=led_races, career_points=career_points, laps_led=laps_led, hat_tricks=hat_tricks, team_loyalty=team_loyalty, summary_records=summary_records)

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