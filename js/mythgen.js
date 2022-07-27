// compiled js file

// Plot Type
const plot_type = [
    "one-shot",
    "vignette",
    "line",
    "arc",
    "convergence",
    "divergence",
    "swansong",
    "module",
    "recurrence"
];

// Plot Type
const plot_tone = [
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
];

// Plot Type
const plot_genre = [
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
    "mind-bender",
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
];

// Fetch Quest
const item = [
    // Ace-10 of spades from MHoF
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

    // from the Meme Machine
    "a really tiny knife",
    "the local tavern",
    "a jar of dirt",
    "a steamy adult romance novel",
    "gold",
    "a cursed magical item",
    "a small horse",
    "court summons",
    "a spyglass",
    "a little lad in a fancy suit",
    "a hot girl",
    "a hot guy",
    "a malewife",
    "a pair of scissors"
];

// Fetch Quest
const property = [
    // Ace-10 of spades from MHoF
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

    // from the Meme Machine
    "contains ancient secrets",
    "is absolutely useless",
    "is full of dirt",
    "was cursed by a witch",
    "is deeply and incredibly cursed",
    "used to be green",
    "has eyes",
    "does not have eyes",
    "looks like a goose",
    "someone left on a boat",
    "was lost at sea",
    "will fix my marriage"
];

// Fetch Quest
const goal = [
    // Ace-10 of spades from MHoF
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

    // from the Meme Machine
    "so that we can return it before anyone notices that it's gone",
    "even though we won't get paid",
    "because we're destined to have it",
    "so that we can buy new farmlands",
    "so that we can get paid for once",
    "and have been ever since it was lost at sea",
    "because someone asked really really nicely",
    "because I made a pinky promise to a witch",
    "so we can put it on display and go 'heehee' every time we look at it",
    "so we can get out of jury duty",
    "so we can get out of community service",
    "because we are hiding from several ghosts",
    "for comedy purposes",
    "so someone can get laid",
    "because we need to make a little lad dance for us and he won't do it without the proper incentive",
    "so that we won't be executed by royalty",
    "because we need angsty backstory motivation",
    "so that we can frame someone",
    "because we'll be killed if we don't",
    "to make someone's wife happy"
];

// Fetch Quest
const twist = [
    // Ace-10 of spades from MHoF
    "this is the perfect opportunity to take vengeance",
    "the upcoming choices should not be made by one person alone",
    "victory will come at great cost and sacrifice",
    "we don't have all of the information",
    "there's a good chance that we will be attacked by a werewolf",
    "we need to be careful not to piss anybody off otherwise we WILL be having an afternoon tea party with the Barristers (aka die horribly)",
    "we are liable for our own actions and have no one to blame for the consequences but ourselves",
    "however bad we think this adventure is going to be, it is going to be WAY worseLike way worse. Oh my god",
    "while we may accomplish our goals, there is a good chance that we will lose sight of what is most important in the process",

    // from the Meme Machine
    "the real treasure will NOT be the friends that we made along the way",
    "hey, it might be fun anyways",
    "surely nothing could possibly go wrong :)",
    "we're not the only ones looking for it",
    "surely it can't get any worse than this! (It can)",
    "wait! There's more",
    "this might get us executed by royalty",
    "it gets worse",

    // fantasy generator - note
    "someone involved has long longed for something more",
    "someone involved has a grudge to settle",
    "someone involved has a reputation to salvage",
    "someone involved has to atone for a past misdeed",
    "someone involved has a secret that musn't be revealed",
    "someone involved is in denial about something important",
    "someone involved is often in the wrong place at the wrong time",
    "someone involved has recently lost someone dear",
    "someone involved owes a debt to someone powerful",
    "someone involved can't return home for a certain reason",
    "someone involved is pursuing someone else",
    "someone involved failed to protect someone once",
    "someone involved will make a mistake that will change everything",
    "not all is as it first appears",
    "someone involved will lose a limb in a horrific manner",
    "an important reunion will go horribly off the rails",
    "someone involved will harbor a hidden agenda the entire time",
    "the old are not wise in this story",
    "someone involved is still haunted by a past mistake",
    "there have been whispers for a while that something is not right about the royal family",
    "the ancient sword discovered will turn out to be junk",
    "an important prophecy will be delivered by a seer with a reputation for exaggeration",
    "someone involved has a lot of hard lessons to learn",
    "society is still recovering from a crippling plague",
    "the gods cannot be trusted",

    // fantasy generator - twist
    "a rival was an ally all along",
    "someone who was thought to be dead will return in the flesh",
    "all the characters are animals",
    "the prophecy will not come true",
    "this story will have an unhappy ending",
    "the villain will escape at the end of this story",
    "this item will turn out to be a red herring"
];

// NPC Builder
const chara = [
    "a peasant girl",
    "a warrior",
    "a mage",
    "a lad",
    "a fruit-seller",
    "a sellsword",
    "a nomad",
    "a lord",
    "a knight",
    "an assassin",
    "a gentleman thief",
    "a soldier",
    "an empress",
    "a monk",
    "a ranger",
    "a rogue",
    "a ruffian",
    "a sorceror",
    "a witch",
    "an outlaw",
    "a woodsman",
    "a warlord",
    "a noblewoman",
    "a monsterologist",
    "a gentlewoman thief",
    "a druid",
    "a bard",
    "a young boy",
    "a swordmaster",
    "an apprentice",
    "an assassin-in-training",
    "a page",
    "a troubadour",
    "an enchantress-in-training",
    "an ogre",
    "a summoner-in-training",
    "a brigand",
    "a sorceror",
    "a dragon",
    "an elven prince",
    "a witch-in-training",
    "a centaur",
    "a charlatan",
    "a necromancer-in-training",
    "an enchanter",
    "a goblin",
    "a vampire",
    "a genie",
    "a shaman",
    "a prophet-in-training",
    "a sorceror-in-training",
    "a troll",
    "a pickpocket",

    // professions from the myth book
    "a coalescer",
    "an excavator",
    "a harvester",
    "a logger",
    "a skinner",
    "a farmer",
    "a hunter",
    "a lumberjack",
    "a miner",
    "a panner",
    "a butcher",
    "a carpenter",
    "a gemcutter",
    "a glassmaker",
    "a papermaker",
    "a smelter",
    "a tanner",
    "a weaver",
    "an architect",
    "a blacksmith",
    "a brewer",
    "a chef",
    "a glassblower",
    "a lapidary",
    "a leatherworker",
    "a tailor",
    "a trapmaker",
    "a woodworker",
    "an appraiser",
    "a laborer",
    "a mender",

    // from the Meme Machine
    "an eccentric candyman",
    "a retail employee",
    "a werewolf",
    "a feral child",
    "a snake-oil salesman",
    "an influencer",
    "a cowboy",
    "a pirate",
    "a rat",
    "a child psychologist",
    "a ghost-hunter",
    "an archivist",
    "a creature",
    "a demolitions expert",
    "a goose",
    "a duelist",
    "a dog",
    "a construct",
    "a landlord",
    "a celebrity chef",
    "the village idiot",
    "some old guy",
    "a tax-evader",
    "a draft dodger",
    "a pyrotechnician",
    "an arsonist",
    "a professional arsonist",
    "a retired assassin",
    "a goth",
    "a clown",
    "an entire circus of clowns",
    "three possums in a trench coat",
    "a doctor",
    "a lawyer"
];

// NPC Builder
const trait = [
    "can be restless",
    "can be ambitious",
    "is kind",
    "used to be idealistic",
    "is past prime",
    "can be brusque",
    "is stubborn to a fault",
    "has not laughed in a long time",
    "lies more often than not",
    "is surprisingly gentle",
    "once was hopeful",
    "can be independently-minded",
    "can be selfish",
    "can be sharp",
    "can be over-critical",
    "tends to be reckless",
    "is abrasive",
    "has become aimless",
    "has a lot of defense mechanisms",
    "can be cold",
    "has a tendency to be cowardly",
    "is destructive",
    "can be detached",
    "can be judgemental",
    "has a sense of humor",
    "has a reputation for being melodramatic",
    "has burnt every bridge",
    "can be vain",
    "has become withdrawn",
    "is taciturn",
    "can be stoic",
    "is suave",
    "is quick-witted",
    "no longer has any loyalties",
    "has a strong moral compass",
    "has 99 problems, and a sidekick is one of them",
    "is a crank",
    "has a reputation for being eccentric",
    "is misunderstood",
    "is a worrywart",
    "is innocent",
    "is rather unpredictable",
    "is unexpectedly charismatic",
    "has a poker face",
    "is soft-hearted",
    "can be independently-minded",
    "used to be selfish",
    "has many controversial opinions",
    "is deadpan",
    "can be pretentious",
    "is prim",
    "is puritanical",
    "can be tactless",
    "tends to attract trouble",
    "is blind",
    "thrives on drama",
    "can be forgetful",
    "is a drifter",
    "is a chatterbox",
    "is spineless",
    "is rather incompetent",
    "is bright",
    "is sensible to a fault",
    "is a forgiving soul",
    "is braver than most",
    "has no moral code",
    "has run away",
    "is affable",
    "is taciturn",
    "is overly polite",
    "can be naïve",
    "can be overly pompous",
    "is overly adventurous",
    "is a lover of books",
    
    // from the Meme Machine
    "was found by the side of the road",
    "is Italian",
    "is haunted",
    "is hot",
    "is divorced",
    "is bisexual",
    "is goth",
    "is a creature",
    "is a war criminal",
    "is a time traveler",
    "is a shitty time traveler",
    "is a shitty wizard",
    "is a conspiracy theorist",
    "is a flat earther",
    "is a flat earther to be a dick",
    "is an arsonist",
    "is an absentee father",
    "is an alcoholic",
    "is so hungover",
    "is so close to snapping",
    "is really good at not throwing up",
    "is terrified of ducks",
    "is really up their own ass about poetry",
    "is currently facing a lawsuit",
    "is banned from Applebee's",
    "is plagued by visions",
    "is blue for no reason",
    "is reasonably horny",
    "is unreasonably horny",
    "is from hell",
    "is from the LARP equivalent of Texas",
    "has a headache",
    "has a fat ass",
    "has a cool hat",
    "has a child nemesis",
    "has a tiny creature for a sidekick",
    "has a penchant for truly terrible wordplay",
    "has no idea whats going on",
    "has not been around civilaztion for some time",
    "has not bathed in three weeks",
    "has the attention span of a goldfish",
    "has had their medical license revoked",
    "has already snapped",
    "has killed before and will kill again",
    "has got it going on",
    "has human eyes",
    "has interesting feelings about spiders",
    "has three weed-smoking girlfriends",
    "has blue hair and pronouns",
    "only has one outfit",
    "thinks they're a goose",
    "thinks they're hot shit",
    "thinks your mom is hot",
    "thinks your dad is hot",
    "thinks your parent of unspecified gender is hot",
    "thinks the earth is shaped like a donut because it's funny",
    "thinks the earth is shaped like a donut because they're kind of hungry right now",
    "doesn't have human eyes",
    "doesn't talk to their parents",
    "doesn't believe in hell",
    "doesn't think the sun is real",
    "needs therapy",
    "needs a nap",
    "eats glue",
    "eats magic items",
    "smokes way too much weed",
    "smokes a regular amount of weed",
    "considers themself to be morally grey but has committed several murders",
    "will die on any hill",
    "won't shut up about their kids",
    "would survive a Saw trap",
    "loves their wife",
    "likes to break the fourth wall",
    "really likes dragons",
    "hates children",
    "talks like an anime character",
    "solves all of their problems with card games",     
    "regularly commits tax fraud",
    "used to be a war criminal and has since been pardoned",
    "lies about their age",
    "lies through the newspaper",
    "faked their death",
    "denies any and all responsibility for..the incident",
    "woke up and chose violence",
    "vapes",
    "fucks",
    "can be real dick",
    "naps in weird places",
    "got their ears pierced at Claire's"
];

// random string for all the generators
function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

// Plot Test
function plotGen() {
    const type = randomString(plot_type);
    const tone = randomString(plot_tone);
    const genre = randomString(plot_genre);

    document.getElementById("pt-type").innerHTML = type;
    document.getElementById("pt-tone").innerHTML = tone;
    document.getElementById("pt-genre").innerHTML = genre;
}

// Querent's Quest
function questGen() {
    const quest_item = randomString(item);
    const quest_property = randomString(property);
    const quest_goal = randomString(goal);
    const quest_twist = randomString(twist);

    document.getElementById("qq-item").innerHTML = quest_item;
    document.getElementById("qq-property").innerHTML = quest_property;
    document.getElementById("qq-goal").innerHTML = quest_goal;
    document.getElementById("qq-twist").innerHTML = quest_twist;
}

// NPC Builder
function npcGen() {
    const chara_one = randomString(chara);
    const trait_one = randomString(trait);
    const chara_two = randomString(chara);
    const trait_two = randomString(trait);
    const chara_three = randomString(chara);
    const trait_three = randomString(trait);

    document.getElementById("npc-chara-1").innerHTML = chara_one;
    document.getElementById("npc-trait-1").innerHTML = trait_one;
    document.getElementById("npc-chara-2").innerHTML = chara_two;
    document.getElementById("npc-trait-2").innerHTML = trait_two;
    document.getElementById("npc-chara-3").innerHTML = chara_three;
    document.getElementById("npc-trait-3").innerHTML = trait_three;
}