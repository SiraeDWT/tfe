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
