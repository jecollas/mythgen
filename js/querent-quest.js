/*
We are looking for ITEM that PROPERTY. 
We are looking for this GOAL, but WARNING.
*/

const questElem = {
    item: [
        "a sword",
        "a shield",
        "a bottle of alcohol",
        "a knife",
        "someone's dog",
        "a fight",
        "a really cool cloak",
        "information",
        "financial compensation",
        "a really big knife",
        "a potion"
    ],
    property: [
        "used to belong to a famous general",
        "was blessed by the gods",
        "will help heal someone who's been injured",
        "was used to kill someone important",
        "played a key role in changing fate",
        "everyone hates",
        "is a vital clue in an ongoing mystery or investigation",
        "has become corrupted",
        "hurts people",
        "taps into a person's ambition and drives them to cruelty"
    ],
    goal: [
        "so that we can settle a grudge",
        "because it will provide us with strength in the coming days",
        "because we are duty-bound to honor an agreement",
        "so that we can take down one of our enemies",
        "to tip the scales in our favor and gain the upper hand in an ongoing conflict",
        "so that we can kick someone's ass",
        "for Scooby Doo reasons",
        "as a means to depose someone in power",
        "because it's technically our job",
        "it will help us achieve one of our goals"
    ],
    warning: [
        "this is the perfect opportunity to take vengeance",
        "the upcoming choices should not be made by one person alone",
        "victory will come at great cost and sacrifice",
        "we don't have all of the information",
        "there's a good chance that we will be attacked by a werewolf",
        "we need to be careful not to piss anybody off otherwise we WILL be having an afternoon tea party with the Barristers (aka die horribly)",
        "we should remember that new and scary things aren't always so bad",
        "we are liable for our own actions and have no one to blame for the consequences but ourselves",
        "however bad we think this adventure is going to be, it is going to be WAY worse. Like way worse. Oh my god",
        "while we may accomplish our goals, there is a good chance that we will lose sight of what is most important in the process"
    ]
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function questGen() {
    const item = randomString(questElem.item);
    const property = randomString(questElem.property);
    const goal = randomString(questElem.goal);
    const warning = randomString(questElem.warning);

    document.getElementById("qq-item").innerHTML = item;
    document.getElementById("qq-property").innerHTML = property;
    document.getElementById("qq-goal").innerHTML = goal;
    document.getElementById("qq-warning").innerHTML = warning;
}