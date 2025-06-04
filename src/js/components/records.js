export function initRecordsCharts(){
    const mainColor = "#F7D417";
    const axisColor = "#FAFAFA";
    const subtleGrid = "rgba(250,250,250,0.08)";

    function createMinimalBarChart(ctx, labels, data, label = "") {
        return new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: mainColor,
                        borderWidth: 0,
                        barThickness: 18
                    }
                ]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true }
                },
                scales: {
                    x: {
                        ticks: {
                            color: axisColor,
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: { display: false }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: axisColor,
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: subtleGrid,
                            lineWidth: 0.5
                        }
                    }
                },
                layout: { padding: 0 },
                responsive: true,
                animation: false
            }
        });
    }

    // Champion titles
    {
        const raw = document.getElementById("champions-data").textContent;
        const champions = JSON.parse(raw);
        const labels = champions.map(c => c.name);
        const data = champions.map(c => c.titles);
        const ctx = document.getElementById("chartRecords").getContext("2d");
        createMinimalBarChart(ctx, labels, data);
    }

    // Race wins
    {
        const raw = document.getElementById("winners-data").textContent;
        const winners = JSON.parse(raw);
        const labels = winners.map(w => w.name);
        const data = winners.map(w => w.wins);
        const ctx = document.getElementById("chartWins")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Poles
    {
        const raw = document.getElementById("poles-data").textContent;
        const poles = JSON.parse(raw);
        const labels = poles.map(p => p.name);
        const data = poles.map(p => p.poles);
        const ctx = document.getElementById("chartPoles")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Podiums
    {
        const raw = document.getElementById("podiums-data").textContent;
        const podiums = JSON.parse(raw);
        const labels = podiums.map(p => p.name);
        const data = podiums.map(p => p.podiums);
        const ctx = document.getElementById("chartPodiums")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Team wins
    {
        const raw = document.getElementById("team-wins-data").textContent;
        const teamWins = JSON.parse(raw);
        const labels = teamWins.map(t => t.name);
        const data = teamWins.map(t => t.wins);
        const ctx = document.getElementById("chartTeamWins")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Circuit wins
    {
        const raw = document.getElementById("circuit-wins-data").textContent;
        const circuitWins = JSON.parse(raw);
        const labels = circuitWins.map(t => t.name);
        const data = circuitWins.map(t => t.wins);
        const ctx = document.getElementById("chartCircuitWins")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Unique circuits with victory
    {
        const raw = document.getElementById("unique-circuits-data").textContent;
        const uniqueCircuits = JSON.parse(raw);
        const labels = uniqueCircuits.map(t => t.name);
        const data = uniqueCircuits.map(t => t.circuits);
        const ctx = document.getElementById("chartUniqueCircuits")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Led races
    {
        const raw = document.getElementById("led-races-data").textContent;
        const ledRaces = JSON.parse(raw);
        const labels = ledRaces.map(p => p.name);
        const data = ledRaces.map(p => p.led_races);
        const ctx = document.getElementById("chartLedRaces")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Career points
    {
        const raw = document.getElementById("career-points-data").textContent;
        const careerPoints = JSON.parse(raw);
        const labels = careerPoints.map(p => p.name);
        const data = careerPoints.map(p => p.points);
        const ctx = document.getElementById("chartCareerPoints")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Laps led
    {
        const raw = document.getElementById("laps-led-data").textContent;
        const lapsLed = JSON.parse(raw);
        const labels = lapsLed.map(p => p.name);
        const data = lapsLed.map(p => p.laps_led);
        const ctx = document.getElementById("chartLapsLed")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Hat-tricks
    {
        const raw = document.getElementById("hat-tricks-data").textContent;
        const hatTricks = JSON.parse(raw);
        const labels = hatTricks.map(p => p.name);
        const data = hatTricks.map(p => p.hat_tricks);
        const ctx = document.getElementById("chartHatTricks")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Team loyalty
    {
        const raw = document.getElementById("team-loyalty-data").textContent;
        const teamLoyalty = JSON.parse(raw);
        const labels = teamLoyalty.map(p => p.name);
        const data = teamLoyalty.map(p => p.seasons);
        const ctx = document.getElementById("chartTeamLoyalty")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data);
    }

    // Km
    {
        const raw = document.getElementById("summary-records-data").textContent;
        const kmData = JSON.parse(raw);

        const labels = kmData.map(d => d.name);
        const data = kmData.map(d => d.km);

        const ctx = document.getElementById("chartSummary")?.getContext("2d");
        if (ctx) createMinimalBarChart(ctx, labels, data, "Kilomètres parcourus");
    }
}
