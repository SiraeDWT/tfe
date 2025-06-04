import requests
from collections import defaultdict

def get_top_champions(limit=5):
    champions = {
        "Lewis Hamilton": 7,
        "Michael Schumacher": 7,
        "Juan Fangio": 5,
        "Alain Prost": 4,
        "Sebastian Vettel": 4,
    }

    top_champions = sorted(champions.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "titles": champion} for name, champion in top_champions]


def get_top_winners(limit=5):
    wins = {
        "Lewis Hamilton": 105,
        "Michael Schumacher": 91,
        "Max Verstappen": 64,
        "Sebastian Vettel": 53,
        "Alain Prost": 51,
    }

    top_winners = sorted(wins.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "wins": win} for name, win in top_winners]


def get_top_poles(limit=5):
    poles = {
        "Lewis Hamilton": 106,
        "Michael Schumacher": 68,
        "Ayrton Senna": 65,
        "Sebastian Vettel": 57,
        "Max Verstappen": 46
    }

    top_poles = sorted(poles.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "poles": value} for name, value in top_poles]


def get_top_podiums(limit=5):
    podiums = {
        "Lewis Hamilton": 202,
        "Michael Schumacher": 155,
        "Sebastian Vettel": 122,
        "Max Verstappen": 115,
        "Alain Prost": 106
    }

    top_podiums = sorted(podiums.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "podiums": value} for name, value in top_podiums]


def get_top_wins_with_team(limit=5):
    team_wins = {
        "Lewis Hamilton": 84,
        "Michael Schumacher": 72,
        "Max Verstappen": 64,
        "Sebastian Vettel": 38,
        "Ayrton Senna": 35,
    }

    top_team_wins = sorted(team_wins.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "wins": value} for name, value in top_team_wins]


def get_top_wins_on_circuit(limit=5):
    circuit_wins = {
        "Lewis Hamilton": 9,
        "Michael Schumacher": 8,
        "Ayrton Senna": 6,
        "Max Verstappen": 5,
        "Alain Prost": 4
    }

    top_circuits = sorted(circuit_wins.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "wins": value} for name, value in top_circuits]


def get_top_unique_circuit_winners(limit=5):
    circuit_variety = {
        "Lewis Hamilton": 31,
        "Max Verstappen": 25,
        "Sebastian Vettel": 23,
        "Alain Prost": 22,
        "Michael Schumacher": 22
    }

    sorted_variety = sorted(circuit_variety.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "circuits": value} for name, value in sorted_variety]


def get_top_races_led(limit=5):
    races_led = {
        "Lewis Hamilton": 191,
        "Michael Schumacher": 142,
        "Max Verstappen": 121,
        "Sebastian Vettel": 101,
        "Ayrton Senna": 89
    }

    sorted_races = sorted(races_led.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "led_races": value} for name, value in sorted_races]


def get_top_points(limit=5):
    points = {
        "Lewis Hamilton": 4903.5,
        "Sebastian Vettel": 3098,
        "Max Verstappen": 2873.5,
        "Fernando Alonso": 2265,
        "Valtteri Bottas": 1793
    }

    sorted_points = sorted(points.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "points": value} for name, value in sorted_points]


def get_top_laps_led(limit=5):
    laps_led = {
        "Lewis Hamilton": 5487,
        "Michael Schumacher": 5111,
        "Sebastian Vettel": 3501,
        "Max Verstappen": 3250,
        "Ayrton Senna": 2931
    }

    sorted_laps = sorted(laps_led.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "laps_led": value} for name, value in sorted_laps]


def get_top_hat_tricks(limit=5):
    hat_tricks = {
        "Lewis Hamilton": 63,
        "Michael Schumacher": 22,
        "Sebastian Vettel": 18,
        "Max Verstappen": 15,
        "Nigel Mansell": 14
    }

    sorted_hats = sorted(hat_tricks.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "hat_tricks": value} for name, value in sorted_hats]


def get_top_team_loyalty(limit=5):
    team_loyalty = {
        "Lewis Hamilton": 12,
        "Michael Schumacher": 11,
        "Max Verstappen": 9,
        "Jim Clark": 7,
        "Ayrton Senna": 6
    }

    sorted_loyalty = sorted(team_loyalty.items(), key=lambda x: x[1], reverse=True)[:limit]
    return [{"name": name, "seasons": value} for name, value in sorted_loyalty]


def get_summary_records():
    return [
        {"name": "Alonso", "km": 111392},
        {"name": "Hamilton", "km": 103956},
        {"name": "Räikkönen", "km": 96746},
        {"name": "Schumacher", "km": 84927},
        {"name": "Button", "km": 82962}
    ]
