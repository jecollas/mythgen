// {CONDITION} {GROUP} of {MEMBERS} {ACTION} {MEANS} {LOCATION} {GOAL} {MOTIVATION} {COMPLICATION}

const adventureElem = {
    condition: [
        "A paramilitary",
        "A military",
        "A search",
        "A suicidal",
        "A fleeing",
        "An organized",
        "An insatiable",
        "A sickened",
        "A lusty",
        "A drug-crazed",
        "A maniacal",
        "An unorganized",
        "A pugilistic",
        "A busybody",
        "An evil",
        "A sociopathic",
        "An underground",
        "A dying",
        "A benevolent",
        "An arsonistic",
        "A disorganized",
        "A convicted",
        "A noble",
        "A liar",
        "A chaotic",
        "A malicious", 
        "A murderous",
        "A pugnacious",
        "A secret",
        "An elderly",
        "A violent",
        "An unharmonious"
        // A devious
        // A young
        // A surreptitious
        // A quarelling
        // An ideologically split 
        // A ragged
        // A cursed 
        // A noble
        // A good
        // An enlightened
        // A zealous
        // A heroic
        // An amnesiac
        // A resurrected
        // a fey-touched
        // A sociopath
        // An elite
        // a lycanthropic 
        // An escaped
        // An injured
        // A commissioned
        // A geased
        // An official
        // A random
        // A self-pitying
        // A well-dressed
        // A xenophobic
        // A superstitious
        // A drunk
        // A depressive
        // A morbid
        // A mortally wounded
        // A diseased
        // A Contrite
        // A hateful
        // An alcoholic
        // A drug-addicted
        // A fanatical
        // Homeless
        // A confused
        // An artistic
        // A desperate
        // A suspicious
        // Unaccountable
        // An exhausted
        // Vocal
        // An undead
        // A shady
        // A righteous
        // Plaintive
        // A cowardly
        // An insane
        // Unscrupulous
        // Oppressed
        // A conned 
        // A cowardly
        // A fallen
        // An undercover
        // a reluctant 
        // an addicted 
        // A bloodthirsty
        // Elite
        // Otherworldly
        // Celestial
        // Outsider
        // Undead
        // Insectoid
        // Brilliant
        // A greedy
        // A materialistic
        // An Unholy
        // Ancient
        // Obsessive
        // An old
        // A young
        // A sole
        // An outgrown
        // An renown
        // A rich
        // A poor
        // A reformed
        // A secretive
        // A paranoid
        // Compulsive
        // Perverse
        // Iconoclastic
        // Nihilistic
        // An insane
        // A former
        // A retired
        // An underappreciated
        // A kindly
    ],
    group: [
        "order"
    ],
    members: [
        "squires"
    ],
    action: [
        "is dying"
    ],
    means: [
        "with fake identities"
    ],
    location: [
        "on the border"
    ],
    goal: [
        "to assume control"
    ],
    motivation: [
        "because they are poor"
    ],
    complication: [
        "they botched the formula"
    ]
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function adventureGen() {
    const condition = randomString(adventureElem.condition);
    const group = randomString(adventureElem.group);
    const members = randomString(adventureElem.members);
    const action = randomString(adventureElem.action);
    const means = randomString(adventureElem.means);
    const location = randomString(adventureElem.location);
    const goal = randomString(adventureElem.goal);
    const motivation = randomString(adventureElem.motivation);
    const complication = randomString(adventureElem.complication);

    document.getElementById("ag-adventure").innerHTML = condition + " " + group + " of " + members + " " + action + " " + location  + ". Their goal is " + goal + " " + means + " " + motivation + ", but " + complication + ".";
}