const plotElements = {
    plotType: [
        "One-shot",
        "Vignette",
        "Line",
        "Arc",
        "Convergence",
        "Divergence",
        "Swansong",
        "Module",
        "Recurring"
    ],
    genre: [
        "Action",
        "Celebration",
        "Comedy",
        "Crime",
        "Drama",
        "Heist",
        "Historical",
        "Horror",
        "Instructional",
        "Investigation",
        "Mind-Bender",
        "Mission",
        "Musical",
        "Mystery",
        "Negotiation",
        "Patriotic",
        "Philosophical",
        "Political",
        "Rivalry/Competition",
        "Romance",
        "Satire",
        "Supernatural",
        "Thriller"      
    ],
    sceneTone: [
        "Aggressive",
        "Goofy",
        "Grim",
        "Happy",
        "Ironic/Satire",
        "Opportunist",
        "Philanthropic",
        "Sad",
        "Serious",
        "Tragic",
        "Whimsical",
        "Witty"
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