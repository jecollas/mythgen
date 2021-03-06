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
    "an aggressive",
    "a goofy",
    "a grim",
    "a happy",
    "an ironic/satiric",
    "an opportunist",
    "a philanthropic",
    "a sad",
    "a serious",
    "a tragic",
    "a whimsical",
    "a witty"
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

// Fetch Quest, Rumors
const item = [
    // Ace-10 of spades from MHoF
    "a sword",
    "a shield",
    "a bottle of alcohol",
    "a knife",
    "a dog",
    // "a fight",
    "a really cool cloak",
    "information",
    "financial compensation",
    "a really big knife",
    "a potion",

    // from the Meme Machine
    "a really tiny knife",
    "a jar",
    "a steamy adult romance novel",
    "a cursed magical item",
    "a small horse",
    "a spyglass",
    "a pair of scissors",
    "a magic item"
];

// Fetch Quest, Rumors
const property = [
    // Ace-10 of spades from MHoF
    "used to belong to a famous general",
    "was blessed by the gods",
    "was used to kill someone important",
    "played a key role in changing fate",
    "everyone hates",
    "is a vital clue in an ongoing mystery or investigation",
    "has become corrupted",
    "hurts people",

    // from the Meme Machine
    "contains ancient secrets",
    "is absolutely useless",
    "is full of dirt",
    "was cursed by a witch",
    "is deeply and incredibly cursed",
    "used to be green",
    "has eyes",
    "looks like a goose",
    "someone left on a boat",
    "was lost at sea",
    "will fix my marriage",
    "can heal any wound",
    "is made of gold",
    "went missing years ago",
    "is hot to the touch",
    "is cold to the touch",
    "was stolen by bandits",
    "was created as a result of a fae deal gone wrong"
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
    "because it will help us achieve one of our goals",

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
    "so that someone can get laid",
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
    "surely things can't get any worse than this! Spoiler alert: they can",
    "wait! There's more",
    "this might get us executed by royalty",
    "it gets worse",
    "this might be funny",

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
    "there have been whispers for a while that something is not right with the royal family",
    "the ancient sword we discovered will turn out to be junk",
    "an important prophecy will be delivered by a seer with a reputation for exaggeration",
    "someone involved has a lot of hard lessons to learn",
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
    "a peasant boy",
    "a young boy",
    "a young girl",
    "a lad",
    "a lass",
    "a fruit-seller",
    "a gem merchant",
    "a sellsword",
    "a nomad",
    "a knight",
    "an assassin",
    "a gentleman thief",
    "a gentlewoman thief",
    "a soldier",
    "a monk",
    "a sorceror",
    "an enchanter",
    "a witch",
    "a warlock",
    "a warrior",
    "a mage",
    "an outlaw",
    "a ruffian",
    "a brigand",
    "a pickpocket",
    "a thief",
    "a woodsman",
    "a warlord",
    "a page",
    "a squire",
    "a troubadour",
    "an empress",
    "an emperor",
    "a noblewoman",
    "a nobleman",
    "a lord",
    "a lady",
    "a prince",
    "a princess",
    "a diplomat",
    "a monsterologist",
    "a swordmaster",
    "an apprentice",
    "an assassin-in-training",
    "an enchantress-in-training",
    "a summoner-in-training",
    "a witch-in-training",
    "a necromancer-in-training",
    "a prophet-in-training",
    "a sorceror-in-training",
    "an ogre",
    "a dragon",
    "a centaur",
    "a charlatan",
    "a vampire",
    "a genie",
    "a troll",

    // races from the myth book
    "a dale elf",
    "a deep elf",
    "a dwarf",
    "a goblin",
    "a half elf",
    "a high elf",
    "a human",
    "a suhk",
    "a wildren",

    // classes from the myth book
    "an alchemist",
    "an artificer",
    "a bard",
    "a cleric",
    "a druid",
    "a fighter",
    "a paladin",
    "a ranger",
    "a rogue",
    "a runesmith",
    "a wizard",

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
    "some old lady",
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
    "a lawyer",
    "a con artist",
    "a grifter",
    "a little lad in a fancy suit",
    "a hot girl",
    "a hot guy",
    "a hot person",
    "a malewife",
    "an entity",
    "an absent father",
    "a war criminal",
    "a shitty wizard",
    "a conspiracy theorist",
    "an adrenaline junkie",
    "a time traveler",
    "an Italian",
    "an asshole",
    "a deadbeat dad",
    "a deadbeat mom",
    "a deadbeat parent",
    "a Little League coach",
    "a mobster",
    "a grad student",
    "a librarian",
    "a researcher",
    "a research assistant",
    "an entomologist",
    "a butch lesbian",
    "a dancer",
    "a singer",
    "a musician",
    "a historian",
    "a private investigator",
    "a detective",
    "a comedian",
    "someone",
    "a pro-wrestler",
    "a furry"
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
    "can be na??ve",
    "can be overly pompous",
    "is overly adventurous",
    "is a lover of books",
    
    // from the Meme Machine
    "was found by the side of the road",
    "is haunted",
    "is hot",
    "is divorced",
    "is bisexual",
    "is goth",
    "is evil",
    "is stinky",
    "is nonbinary",
    "is literally neurodivergent and a minor",
    "is a furry",
    "is a flat earther",
    "is a flat earther to be a dick",
    "is a bit of a daredevil",
    "is an arsonist",
    "is an alcoholic",
    "is so hungover",
    "is so close to snapping",
    "is terrified of ducks",
    "is really up their own ass about poetry",
    "is currently facing a lawsuit",
    "is currently running a scam",
    "is banned from Applebee's",
    "is plagued by visions",
    "is blue for no reason",
    "is reasonably horny",
    "is unreasonably horny",
    "is from hell",
    "is from the LARP equivalent of Texas",
    "is afraid of the dark",
    "is a competitive little shit",
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
    "does not have human eyes",
    "has interesting feelings about spiders",
    "has three weed-smoking girlfriends",
    "has blue hair and pronouns",
    "has an ongoing feud with the local mage's guild (don't ask)",
    "only has one outfit",
    "thinks they're a goose",
    "thinks they're hot shit",
    "thinks your mom is hot",
    "thinks your dad is hot",
    "thinks your parent of unspecified gender is hot",
    "thinks the earth is shaped like a donut because it's funny",
    "thinks the earth is shaped like a donut because they're kind of hungry right now",
    "believes all rumors to be true",
    "doesn't talk to their parents",
    "doesn't believe in hell",
    "doesn't think the sun is real",
    "needs therapy",
    "needs a nap",
    "needs to get laid",
    "eats glue",
    "eats magic items",
    "smokes way too much weed",
    "smokes a regular amount of weed",
    "considers themself to be morally grey but has committed several murders",
    "will die on any hill",
    "won't shut up about their kids",
    "would survive a Saw trap",
    "loves arguing",
    "loves puppets",
    "loves soup",
    "loves their wife",
    "likes to break the fourth wall",
    "really likes dragons",
    "hates children",
    "acts like an anime character",
    "solves all of their problems with card games",     
    "regularly commits tax fraud",
    "used to be a war criminal and has since been pardoned",
    "lies about their age",
    "lies through the newspaper",
    "faked their death",
    "denies any and all responsibility for... the incident",
    "woke up and chose violence",
    "vapes",
    "fucks",
    "can be real dick",
    "naps in weird places",
    "got their ears pierced at Claire's",
    "wears way too much eyeliner",
    "went out for a pack of smokes and never returned",
    "took one philosophy class in university and won't shut up about it",
    "solves mysteries on the side",
    "is really passionate about saving the bees",
    "has their own fan club",
    "plays the violin",
    "plays the piano",
    "minds their own business",
    "loves to gossip"
];

const source = [
    "My cousin's friend told him that",
    "My cousin's friend told her that",
    "My cousin told me that",
    "My friend overheard some patrons at the tavern talking about how",
    "I overheard one of the town guard saying that",
    "My friend heard that",
    "I overheard someone saying that",
    "A buddy of mine said that",
    "You didn't hear this from me, but",
    "Rumor has it that",
    "Don't quote me on this, but I heard that",
    "I don't know if this is true or not, but I heard that",
    "I heard through the grapevine that",
    "So get this ??? apparently",
    "A friend of mine was telling me the other day that",
    "A friend of a friend said that",
    "I read in the newspaper that",
    "The bartender slipped me a note that said that",
    "The bartender gave me a heads up that",
    "Someone gave me a heads up that",
    "The spirits revealed to me that",
    "Just trust me on this one, but",
    "The town busybody said that",
    "This might just be me being nosy, but",
    "I'm usually one to mind my own business, but I heard that"
];

const accuse = [
    "having sex",
    "dabbing",
    "daydreaming",
    "being a little bitch",
    "lying to a person of authority",
    "faking their death",
    "being gay and doing crimes",
    "transing their gender",
    "kidnapping someone's beloved pet",
    "eating literal garbage",
    "unhinging their jaw like a snake",
    "sneaking suspiciously into a building here in town",
    "coercing people into giving them their teeth",
    "getting their teeth stolen",
    "planning to commit treason",
    "getting absolutely wasted",
    "making a deal with the fae",
    "tilting at windmills",
    "catfishing the constable with pictures of the queen",
    "catfishing the mayor with pictures of the queen",
    "catfishing the queen with pictures of snakes",
    "eating a big pile of spaghetti and not sharing any of it",
    "threatening to kill somebody",
    "killing somebody",
    "hiding a body",
    "pickpocketing their best friend",
    "kissing the homies goodnight",
    "t-posing for dominance",
    "being a fucking narc",
    "being awful to the police",
    "pulling a dragon's tail",
    "vandalizing the local tavern",
    "getting involved with an illicit underground unicorn fight club",
    "playing Yu-Gi-Oh",
    "undermining the government at every turn",
    "falling on their ass",
    "eating shit and falling off their horse",
    "riding topless",
    "stealing from the church"
];

// Rumors
const characters = {
    players: [
        "Karlaen Sin'del",
        "Lord Swift Fingers",
        "Delawyn Liamour",
        "Ursa Oak",
        "Elias Athear",
        "Agon Caradin of Canton", 
        "Jaxx Malendarr",
        "Alwin Malendarr",
        "Verdic Bin Corsica il-Pachero os-Farwhen",
        "Baratraxar Hopsworth Greynettle",
        "Isla Marillon Shallowcove",
        "Cerradus",
        "Tallian Gratz",
        "Waylund",
        "Kilgor",
        "Leisa Vadi",
        "Tacitus Jules Hooker",
        "Sigmund Bjorvika",
        "Relldar Delandrielle",
        "Elen",
        "Remi Dubois",
        "Grylis Sharptongue",
        "Azalea Briarwood",
        "Knox",
        "Norain Wulf",
        "Wren",
        "Arl",
        "Ankh Nym'dul",
        "Brandan Von Naegling",
        "Calus Varin",
        "Alyssandra Lamoran",
        "Myrtle Muckandmire",
        "Gregnobulous Frogmagourke",
        "Rina Duskwalker",
        "Crittamon Luckstryder",
        "Whisper",
        "Artharias",
        "Theran Slate",
        "Brigid",
        "Cayn",
        "Ekyo",
        "Meeps Swag McMuffin",
        "Clay",
        "Fenrisse Starling",
        "Balthazar",
        "Koth Stalgrim",
        "Hilde",
        "Zumlar Mystralith",
        "Cotter Cornwall",
        "Gizzet Moonbright (Giz'Ora)",
        "Yinren Valgon",
        "Alistair Caliban",
        "Willow",
        "Grimstone",
        "Pappa Varnak",
        "Caleb Urtgard",
        "Zav",
        "Minyo Hasselbl??d",
        "Mallazyr 'Dexter' Teken'Tlar",
        "Munta Theynore",
        "Esther Melea Artemis Glade",
        "Esperanza Ta Zata",
        "Riddle",
        "Lorik Ovgar",
        "Thordric Magestone",
        "Hedrin Longfellow",
        "Taliesin Finch",
        "Seraphina Mehri",
        "Sueb Dew",
        "Maurmagil",
        "Ezra",
        "Nakoa",
        "Eitri Hawthorne of the Storm's Mistress",
        "Lucius Grell",
        "Mayax",
        "Matias Elson",
        "Ven",
        "Trisrora",
        "Hart",
        "Catanya",
        "Xanthion Stonebreaker",
        "Saige",
        "Vendal Sihde",
        "Chessaul Nymval",
        "Lady Indy L'Rhine",
        "Vitae Silias",
        "Ajax Ardak",
        "Wenek",
        "Magnus Stillmyst",
        "Mathers",
        "Marlonious Finch",
        "Owen Anderson",
        "Aishin Stormcloud",
        "Alansar Trignot",
        "Victus Krane",
        "Tass",
        "Opulus",
        "Grom",
        "Geillia Mabrik",
        "Amuck Ambrosius",
        "Traveler"
    ],
    face_roles: [
        "Lord Proctor Behran",
        "Farmer Grey",
        "Octavious",
        "Dennis",
        "Zephyr Zax",
        "Druidkeeper Hesperides Crimsonvine",
        "Dr. Emmet Calhoun",
        "Dr. Arianaya Bell-Dreveaux",
        "Euclid, the Bawdy Bard",
        "Ser Amaris",
        "Fable",
        "Xavier Denerethion",
        "Baron Dworrin Stonethrust",
        "Ali from Owlstone Keep",
        "Paradiddle the Odditites Merchant",
        "Nalfor Morehammer",
        "Norrin Radd",
        "Duke Geralt Marielle",
        "Lord Auranos Ashbridge",
        "Getorix Wahl",
        "Oleg Hammersong",
        "Roark Galt",
        "Johann Becket",
        "Bellator Zhao",
        "Mythria Diamantis",
        "Count Amedeo",
        "Master Trapmaker Dom Sourfang",
        "Joff Godley"
    ],
    fake_first:["Billy","Bobby","Mary","Barry","Steven","Marlon","Rachel","Shelby","Eliza","Elizabeth","Joseph","Andy","Arietta","Morgan","Taylor","Tristan","Kai","Anabelle","Duke","Esteban","Antonio","Anthony","Tony","Jackie","John","Mike","Michael","Chev","Mandy","Sully","Joel","Roger","Peter","Connor","Brian","Brendan","Emmy","Isaac","Melissa","Jaime","Jesse","Dakota","Jackson","Sawyer","Xavier","Ester","Tien","Logan","James","Mason","Jason","Calvin","Caleb","Ada","Clay","Gerard","Amy","Lydia","Eugenia","Rose","Jade","Jane","Roxy","Dave","David","Alexis","Jake","Dirk","Sarah","Raleigh","Nikolai","Laila","Emerald","Marcus","Marc","Mark","Caroline","Katie","Kaitlin","Bridget","Haley","Jack","Lauren","Reya","Letitia","Axle","Alex","Rae","Fae","Danny","Dani","Hugo","Juan","Johnny","Paul","Dominic","Mia","Michelle","Dwayne","Chris","Antigone","Maria","Mehak","Vishali","Iris","Shane","Sam","Jimmy","Isabella","Wendy","Thomas","Dan","Daniel","Elias","Cris","Norbert"],
    fake_last: ["Venitzo","Nightlocke","Shelley","Brando","Grey","Stevenson","Andrews","McGrath","Wheeler","Taylor","Brodey","Lee","Han","Collins","LeBeau","Blackwood","Jackson","Stratman","Smith","Filli","Miller","Merlino","Fox","Waldron","Rogers","Adams","de la Cruz","Santiago","Lessio","Belen","Rodriguez","Connors","Parker","Barnes","Price","Sawyer","Wolfe","Mayer","Howlett","Freyason","Foster","Reynolds","Thorne","Owens","Doe","Morse","Paura","Walters","Ivanofski","St. Claire","Shaughnessy","Carson","Fianna","Delarose","Darwin","Red","Green","Perez","Runner","Walker","Toretto","DiArcangelo","Desantos","Tavares","Diamond","Wu","Demehri","Cahill","Brown","Fenton","Rienton"]
};

// Rumors
const monsters = [
    "Boguns",
    "Gnolls",
    "Banshees",
    "Undead",
    "Elementals",
    "Nutkin"
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

const npc_party = [
    "party 1",
    "party 2",
    "party 3"
];

let party_select = "";

// NPC Builder
function npcGen() {
    party_select = randomString(npc_party);

    const chara_one = randomString(chara);
    const trait_one = randomString(trait);
    const fake_first_one = randomString(characters.fake_first);
    const fake_last_one = randomString(characters.fake_last);
    const fake_role_one = fake_first_one + " " + fake_last_one;

    const chara_two = randomString(chara);
    const trait_two = randomString(trait);
    const fake_first_two = randomString(characters.fake_first);
    const fake_last_two = randomString(characters.fake_last);
    // const fake_role_two = fake_first_two + " " + fake_last_two;

    
    const chara_three = randomString(chara);
    const trait_three = randomString(trait);
    const fake_first_three = randomString(characters.fake_first);
    const fake_last_three = randomString(characters.fake_last);
    // const fake_role_three = fake_first_three + " " + fake_last_three;


    switch(party_select) {
        case "party 1":
            document.getElementById("npc-party").innerHTML = " <b>" + chara_one + "</b> who <b>" + trait_one + ", " + chara_two + "</b> who <b>" + trait_two + ",</b> and <b>" + chara_three + "</b> who <b>" + trait_three + ".</b>";
        break;
        case "party 2":
            document.getElementById("npc-party").innerHTML = " <b>" + chara_one + "</b> who <b>" + trait_one + ",</b> and <b>" + chara_two + "</b> who <b>" + trait_two + ".</b>";
        break;
        case "party 3":
            document.getElementById("npc-party").innerHTML = " <b>" + chara_one + "</b> named <b>" + fake_role_one + "</b> who <b>" + trait_one + ".</b>";
        break;
    }
}

const rumors = [
    "rumor 1",
    "rumor 2",
    "rumor 3",
    "rumor 4",
    "rumor 5",
    "rumor 6",
    "rumor 7",
    "rumor 8",
    "rumor 9",
    "rumor 10",
    "rumor 11",
    "rumor 12"
];

const person = [
    "player character",
    "face role",
    "fake role 1",
    "fake role 2"
];

const person_alt = [
    "player character",
    "face role",
    "fake role"
];

let rumor_select = "";
let person_select = "";
let person_select_alt = "";

// Rumors
function rumorGen() {
    rumor_select = randomString(rumors);
    person_select = randomString(person);
    person_select_alt = randomString(person_alt);

    const rumor_character = randomString(characters.players);
    const rumor_face_role = randomString(characters.face_roles);
    const rumor_fake_first = randomString(characters.fake_first);
    const rumor_fake_last = randomString(characters.fake_last);

    const rumor_character_alt = randomString(characters.players);
    const rumor_face_role_alt = randomString(characters.face_roles);
    const rumor_fake_first_alt = randomString(characters.fake_first);
    const rumor_fake_last_alt = randomString(characters.fake_last);

    let rumor_person = "";
    let rumor_person_alt = "";
    
    const rumor_source = randomString(source);
    const rumor_item = randomString(item);
    const rumor_property = randomString(property);
    const rumor_monsters = randomString(monsters);
    const rumor_trait = randomString(trait);
    const rumor_accuse = randomString(accuse);

    const rumor_chara = randomString(chara);
    const rumor_chara_alt = randomString(chara);

    switch (person_select) {
        case "player character":
            rumor_person = "<b>" + rumor_character + "</b>";
        break;
        case "face role":
            rumor_person = "<b>" + rumor_face_role + "</b>";
        break;
        case "fake role 1":
            rumor_person = "someone named <b>" + rumor_fake_first + " " + rumor_fake_last + "</b>";
        break;
        case "fake role 2":
            rumor_person = "<b>" + rumor_chara + "</b> named <b>" + rumor_fake_first + " " + rumor_fake_last + "</b>";
        break;
    }

    switch (person_select_alt) {
        case "player character":
            rumor_person_alt = "<b>" + rumor_character_alt + "</b>";
        break;
        case "face role":
            rumor_person_alt = "<b>" + rumor_face_role_alt + "</b>";
        break;
        case "fake role":
            rumor_person_alt = "someone named <b>" + rumor_fake_first_alt + " " + rumor_fake_last_alt + "</b>";
        break;
    }

    switch (rumor_select) {
        case "rumor 1":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " has <b>" + rumor_item + "</b> that <b>" + rumor_property + ".</b>";
        break;
        case "rumor 2":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " +  rumor_person + " was seen <b>" + rumor_accuse + ".</b>";
        break;
        case "rumor 3":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " is looking for some help with something.";
        break;
        case "rumor 4":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " is looking for <b>" + rumor_item + ".</b>";
        break;
        case "rumor 5":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " is looking for <b>" + rumor_item + "</b> that <b>" + rumor_property + ".</b>";
        break;
        case "rumor 6":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " they may be upping woodland patrols due to a rise in the number of <b>" + rumor_monsters + ".</b>";
        break;
        case "rumor 7":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " was asking around for <b>" + rumor_chara_alt + ".</b>";
        break;
        case "rumor 8":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " + rumor_person + " was asking around for someone who <b>" + rumor_trait + ".</b>";
        break;
        case "rumor 9":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " +  rumor_person + " <b>" + rumor_trait + ".</b>";
        break;
        case "rumor 10":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " +  rumor_person_alt + " is <b>" + rumor_chara + ".</b>";
        break;
        case "rumor 11":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " +  rumor_person_alt + " was asking around for <b>" + rumor_person + ".</b>";
        break;
        case "rumor 12":
            document.getElementById("rm-rumor").innerHTML = rumor_source + " " +  rumor_person + " was seen <b>" + rumor_accuse + "</b> with " + rumor_person_alt + ".";
        break;
    }
}