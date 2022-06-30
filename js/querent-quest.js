/*
We are looking for ITEM that PROPERTY because GOAL. 
One thing we need to know for the journey ahead is that WARNING.
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
        "two knives"
    ],
    property: [
        "used to belong to a famous general",
        "was blessed by the gods",
        "will help heal someone who's been injured",
        "was used to kill someone important",
        "played a key role in changing fate",
        "everyone hates",
        "is a vital clue in an ongoing mystery or investigation",
        "comes from a place of corruption",
        "hurts people",
        "taps into a person's abmition and drive them to cruelty"
    ],
    goal: [
        "we need to settle a grudge",
        "it will provide us with strength in the coming days",
        "we are duty-bound to this task",
        "we need it to take someone down",
        "it will tip the scales in our favor",
        "we really want to kick this one person's ass in particular",
        "of Scooby Doo reasons",
        "we plan to depose someone who should not be in power",
        "it's technically our job so we can't really say no",
        "it will help us achieve our end goal"
    ],
    warning: [
        "this is the perfect opportunity to take vengeance",
        "the upcoming choices should never be made by one person alone",
        "victory wil come at great cost and sacrifice",
        "we don't have all of the information",
        "there's a good chance that we will be attacked by a werewolf",
        "we need to be careful not to piss anybody off otherwise we WILL be having an afternoon tea party with the Barristers",
        "new and scary things aren't always so bad",
        "we are liable for our own actions and have no one to blame for the consequences but ourselves",
        "however bad we think this is going to be, it is going to be WAY worse. Like way worse. Oh my god",
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