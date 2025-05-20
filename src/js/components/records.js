export function initRecordsCharts(){
    // Records Charts
    const raw = document.getElementById("champions-data").textContent;
    const champions = JSON.parse(raw);

    const labels = champions.map(c => c.name);
    const data = champions.map(c => c.titles);

    const ctx = document.getElementById("chartRecords").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    type: "bar",
                    label: "Titres",
                    data: data,
                    backgroundColor: "#F7D417",
                    borderColor: "#FAFAFA",
                    borderWidth: 0,
                    borderRadius: 0,
                    barThickness: 18
                },
                {
                    type: "line",
                    label: "Courbe",
                    data: data,
                    borderColor: "#F7D417",
                    backgroundColor: "#F7D417",
                    tension: 0.1,
                    pointBackgroundColor: "#F7D417",
                    pointBorderColor: "#F7D417",
                    fill: false
                }
            ]
        },
        options: {
            animation: {
                y: {
                    duration: 1000,
                    easing: 'easeOutCubic',
                    animateScale: false,
                    animateRotate: false
                }
            },
            plugins: {
                legend: {
                    // labels: {
                    //     color: "#FAFAFA",
                    //     font: {
                    //         size: 12,
                    //         family: "'PPFormula', sans-serif"
                    //     }
                    // }
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#FAFAFA",
                        font: {
                            size: 12,
                            family: "'PPFormula', sans-serif"
                        }
                    },
                    grid: {
                        color: "rgba(250, 250, 250, 0.5)"
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: "#FAFAFA",
                        font: {
                            size: 12,
                            family: "'PPFormula', sans-serif"
                        }
                    },
                    grid: {
                        color: "rgba(250, 250, 250, 0.5)"
                    }
                }
            },
            layout: {
                padding: 0
            },
            responsive: true
        }
    });


    // -----
    const rawWins = document.getElementById("winners-data").textContent;
    const winners = JSON.parse(rawWins);

    const winLabels = winners.map(w => w.name);
    const winData = winners.map(w => w.wins);

    const ctxWins = document.getElementById("chartWins")?.getContext("2d");

    if (ctxWins) {
        new Chart(ctxWins, {
            type: "bar",
            data: {
                labels: winLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Victoires",
                        data: winData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: winData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawPoles = document.getElementById("poles-data").textContent;
    const poles = JSON.parse(rawPoles);

    const poleLabels = poles.map(p => p.name);
    const poleData = poles.map(p => p.poles);

    const ctxPoles = document.getElementById("chartPoles")?.getContext("2d");

    if (ctxPoles) {
        new Chart(ctxPoles, {
            type: "bar",
            data: {
                labels: poleLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Pôles",
                        data: poleData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: poleData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawPodiums = document.getElementById("podiums-data").textContent;
    const podiums = JSON.parse(rawPodiums);

    const podiumLabels = podiums.map(p => p.name);
    const podiumData = podiums.map(p => p.podiums);

    const ctxPodiums = document.getElementById("chartPodiums")?.getContext("2d");

    if (ctxPodiums) {
        new Chart(ctxPodiums, {
            type: "bar",
            data: {
                labels: podiumLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Podiums",
                        data: podiumData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: podiumData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawTeamWins = document.getElementById("team-wins-data").textContent;
    const teamWins = JSON.parse(rawTeamWins);

    const teamLabels = teamWins.map(t => t.name);
    const teamData = teamWins.map(t => t.wins);

    const ctxTeamWins = document.getElementById("chartTeamWins")?.getContext("2d");

    if (ctxTeamWins) {
        new Chart(ctxTeamWins, {
            type: "bar",
            data: {
                labels: teamLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Victoires avec une écurie",
                        data: teamData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: teamData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawCircuitWins = document.getElementById("circuit-wins-data").textContent;
    const circuitWins = JSON.parse(rawCircuitWins);

    const circuitLabels = circuitWins.map(t => t.name);
    const circuitData = circuitWins.map(t => t.wins);

    const ctxCircuitWins = document.getElementById("chartCircuitWins")?.getContext("2d");

    if (ctxCircuitWins) {
        new Chart(ctxCircuitWins, {
            type: "bar",
            data: {
                labels: circuitLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Victoires sur un même circuit",
                        data: circuitData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: circuitData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawUniqueCircuits = document.getElementById("unique-circuits-data").textContent;
    const uniqueCircuits = JSON.parse(rawUniqueCircuits);

    const nCircuitLabels = uniqueCircuits.map(t => t.name);
    const nCircuitData = uniqueCircuits.map(t => t.circuits);

    const ctxUniqueCircuits = document.getElementById("chartUniqueCircuits")?.getContext("2d");

    if (ctxUniqueCircuits) {
        new Chart(ctxUniqueCircuits, {
            type: "bar",
            data: {
                labels: nCircuitLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Circuits différents avec victoire",
                        data: nCircuitData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: nCircuitData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 2,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawLedRaces = document.getElementById("led-races-data").textContent;
    const ledRaces = JSON.parse(rawLedRaces);

    const ledLabels = ledRaces.map(p => p.name);
    const ledData = ledRaces.map(p => p.led_races);

    const ctxLedRaces = document.getElementById("chartLedRaces")?.getContext("2d");

    if (ctxLedRaces) {
        new Chart(ctxLedRaces, {
            type: "bar",
            data: {
                labels: ledLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Courses menées",
                        data: ledData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: ledData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawCareerPoints = document.getElementById("career-points-data").textContent;
    const careerPoints = JSON.parse(rawCareerPoints);

    const pointsLabels = careerPoints.map(p => p.name);
    const pointsData = careerPoints.map(p => p.points);

    const ctxCareerPoints = document.getElementById("chartCareerPoints")?.getContext("2d");

    if (ctxCareerPoints) {
        new Chart(ctxCareerPoints, {
            type: "bar",
            data: {
                labels: pointsLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Points accumulés en carrière",
                        data: pointsData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: pointsData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 500,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawLapsLed = document.getElementById("laps-led-data").textContent;
    const lapsLed = JSON.parse(rawLapsLed);

    const lapsLabels = lapsLed.map(p => p.name);
    const lapsData = lapsLed.map(p => p.laps_led);

    const ctxLapsLed = document.getElementById("chartLapsLed")?.getContext("2d");

    if (ctxLapsLed) {
        new Chart(ctxLapsLed, {
            type: "bar",
            data: {
                labels: lapsLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Tours passés en tête",
                        data: lapsData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: lapsData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 500,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawHatTricks = document.getElementById("hat-tricks-data").textContent;
    const hatTricks = JSON.parse(rawHatTricks);

    const hatLabels = hatTricks.map(p => p.name);
    const hatData = hatTricks.map(p => p.hat_tricks);

    const ctxHatTricks = document.getElementById("chartHatTricks")?.getContext("2d");

    if (ctxHatTricks) {
        new Chart(ctxHatTricks, {
            type: "bar",
            data: {
                labels: hatLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Hat-tricks",
                        data: hatData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: hatData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 10,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawTeamLoyalty = document.getElementById("team-loyalty-data").textContent;
    const teamLoyalty = JSON.parse(rawTeamLoyalty);

    const loyaltyLabels = teamLoyalty.map(p => p.name);
    const loyaltyData = teamLoyalty.map(p => p.seasons);

    const ctxTeamLoyalty = document.getElementById("chartTeamLoyalty")?.getContext("2d");

    if (ctxTeamLoyalty) {
        new Chart(ctxTeamLoyalty, {
            type: "bar",
            data: {
                labels: loyaltyLabels,
                datasets: [
                    {
                        type: "bar",
                        label: "Saisons complètes avec une même écurie",
                        data: loyaltyData,
                        backgroundColor: "#F7D417",
                        borderColor: "#FAFAFA",
                        borderWidth: 0,
                        borderRadius: 0,
                        barThickness: 18
                    },
                    {
                        type: "line",
                        label: "Courbe",
                        data: loyaltyData,
                        borderColor: "#F7D417",
                        backgroundColor: "#F7D417",
                        tension: 0.1,
                        pointBackgroundColor: "#F7D417",
                        pointBorderColor: "#F7D417",
                        fill: false
                    }
                ]
            },
            options: {
                animation: {
                    y: {
                        duration: 1000,
                        easing: 'easeOutCubic'
                    }
                },
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.5)"
                        }
                    }
                },
                responsive: true
            }
        });
    }


    // -----
    const rawSummary = document.getElementById("summary-records-data").textContent;
    const summaryData = JSON.parse(rawSummary);

    const categories = summaryData.map(row => row.label);
    const drivers = ["Hamilton", "Schumacher", "Vettel", "Verstappen"];

    const driverColors = {
        "Hamilton": "#00F5D0",
        "Schumacher": "#cf0e0e",
        "Vettel": "#000B8D",
        "Verstappen": "#1434A4"
    };

    const datasets = drivers.map(driver => ({
        label: driver,
        data: summaryData.map(row => row[driver] ?? 0),
        borderColor: driverColors[driver],
        backgroundColor: driverColors[driver],
        tension: 0.2,
        fill: false,
        pointBackgroundColor: "#F7D417",
        pointBorderColor: "#F7D417",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2
    }));

    const ctxSummary = document.getElementById("chartSummary")?.getContext("2d");

    if (ctxSummary) {
        new Chart(ctxSummary, {
            type: "line",
            data: {
                labels: categories,
                datasets: datasets
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        }
                    },
                    tooltip: {
                        mode: "index",
                        intersect: false
                    }
                },
                interaction: {
                    mode: "nearest",
                    axis: "x",
                    intersect: false
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.1)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#FAFAFA",
                            font: {
                                size: 12,
                                family: "'PPFormula', sans-serif"
                            }
                        },
                        grid: {
                            color: "rgba(250, 250, 250, 0.1)"
                        }
                    }
                }
            }
        });
    }
}