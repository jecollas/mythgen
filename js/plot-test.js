const plotElements = {
    plotType: [
        "one-shot",
        "vignette",
        "line",
        "arc",
        "convergence",
        "divergence",
        "swansong",
        "module",
        "recurring"
    ],
    genre: [
        "action",
        "celebration",
        "comedy",
        "crime",
        "drama",
        "heist",
        "historical",
        "horror",
        "instructional",
        "investigation",
        "mind-Bender",
        "mission",
        "musical",
        "mystery",
        "negotiation",
        "patriotic",
        "philosophical",
        "political",
        "rivalry/competition",
        "romance",
        "satire",
        "supernatural",
        "thriller"      
    ],
    sceneTone: [
        "aggressive",
        "goofy",
        "grim",
        "happy",
        "ironic/satire",
        "opportunist",
        "philanthropic",
        "sad",
        "serious",
        "tragic",
        "whimsical",
        "witty"
    ]
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function plotGen() {
    const tone = randomString(plotElements.sceneTone);
    const genre = randomString(plotElements.genre);
    const type = randomString(plotElements.plotType);

    document.getElementById("toneVar").innerHTML = tone;
    document.getElementById("genreVar").innerHTML = genre;
    document.getElementById("typeVar").innerHTML = type;
}