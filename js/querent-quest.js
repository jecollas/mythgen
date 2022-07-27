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
        "a potion",

        "a really tiny knife",
        "the local tavern",
        "a jar of dirt",
        "the next Chosen One",
        "a steamy adult romance novel",
        "gold",
        "a cursed magical item",
        "a small horse",
        "court summons",
        "a spyglass",
        "a little lad in a fancy suit",
        "berries and cream",
        "a hot guy",
        "a malewife",
        "a war crime",
        "a pair of scissors"
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
        "taps into a person's ambition and drives them to cruelty",

        "contains ancient secrets",
        "is absolutely useless",
        "is full of dirt",
        "is in them-there hills",
        "was cursed by a witch",
        "is deeply and incredibly cursed",
        "used to be green",
        "has eyes",
        "does not have eyes",
        "looks like a goose",
        "someone left on a boat",
        "was lost at sea",
        "is whatever the hell me-core is",
        "will fix my marriage"
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
        "it will help us achieve one of our goals",

        "so that we can return it before anyone notices that it's gone",
        "even though we won't get paid",
        "because we're destined to have it",
        "because we crave that mineral",
        "because we need new farmlands",
        "so that we can get paid for once",
        "because we're full of hubris",
        "and have been ever since it was lost at sea",
        "because someone asked really really nicely",
        "because your mom said so",
        "because I made a pinky promise to a witch",
        "so we can put it on display and go 'heehee' every time we look at it",
        "because we need to get out of jury duty",
        "because we need to get out of community service",
        "because we are hiding from several ghosts",
        "for comedy purposes",
        "so I can get laid",
        "because we need to make a little lad dance for us and he won't do it without the proper incentive",
        "so that we won't be executed by royalty",
        "because we need angsty backstory motivation",
        "so that we can frame someone",
        "if we don't, we'll be killed instead",
        "to make my wife happy"
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
        "while we may accomplish our goals, there is a good chance that we will lose sight of what is most important in the process",

        "the real treasure will NOT be the friends that we made along the way",
        "hey, it might be fun anyways",
        "surely nothing could possibly go wrong :)",
        "we're not the only ones looking for it",
        "surely it can't get any worse than this! (It can)",
        "wait! There's more",
        "the pro-gamer strats lied",
        "this might get us executed by royalty",
        "the little lad is a liar, and so is his goldfish",
        "there's gonna be a lot of crocodiles. Like, so many crocodiles. However many crocodiles you're imagining, add six, double it, and you still won't get close"
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