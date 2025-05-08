import requests
from collections import defaultdict

ERGAST_URL = "http://ergast.com/api/f1/driverStandings/1.json?limit=1000"

def get_top_champions(limit=5):
    response = requests.get(ERGAST_URL)
    data = response.json()
    lists = data["MRData"]["StandingsTable"]["StandingsLists"]

    champions = defaultdict(list)

    for item in lists:
        driver = item["DriverStandings"][0]["Driver"]
        name = f"{driver['givenName']} {driver['familyName']}"
        champions[name].append(item["season"])

    sorted_champions = sorted(champions.items(), key=lambda x: len(x[1]), reverse=True)
    top = sorted_champions[:limit]

    return [{"name": name, "titles": len(seasons)} for name, seasons in top]


def get_top_winners(limit=5):
    url = "https://ergast.com/api/f1/drivers.json?limit=1000"
    response = requests.get(url)
    drivers = response.json()["MRData"]["DriverTable"]["Drivers"]

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