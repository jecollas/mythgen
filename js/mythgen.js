////////////////////////////////
//// OBJECT VARIABLES
////////////////////////////////
// plot tone and genre
const plots = {
  tone: [
    "aggressive","goofy","grim","happy","ironic","satiric","opportunist","philanthropic","sad","serious","tragic","whimsical","witty"
  ],
  genre: [
    "action","celebration","comedy","crime","drama","heist","historical","horror","instructional","investigation","mind-bender","mission","musical","mystery","negotiation","patriotic","philosophical","political","rivalry/competition","romance","satire","supernatural","thriller"      
  ]
}

// item properties for singular and plural objects
const property = {
  singular: [
    "is a vital clue in an ongoing mystery or investigation",
    "is absolutely useless",
    "is full of dirt",
    "is deeply and incredibly cursed",
    "is made of gold",
    "is hot to the touch",
    "is cold to the touch",

    "can heal any wound",

    "has become corrupted",
    "has eyes",

    "used to belong to a famous general",
    "used to be green",

    "was blessed by the gods",
    "was used to kill someone important",
    "was cursed by a witch",
    "was lost at sea",
    "was stolen by bandits",
    "was created as a result of a fae deal gone wrong",
    "was left on a boat",

    "will fix my marriage",

    // present tense
    "hurts people",
    "contains ancient secrets",
    "looks like a goose",
    
    // past tense
    "played a key role in changing fate",
    "went missing years ago",

    // misc
    "everyone hates",
  ],
  plural: [
    "are a vital clue in an ongoing mystery or investigation",
    "are absolutely useless",
    "are full of dirt",
    "are deeply and incredibly cursed",
    "are made of gold",
    "are hot to the touch",
    "are cold to the touch",

    "can heal any wound",

    "have become corrupted",
    "have eyes",

    "used to belong to a famous general",
    "used to be green",

    "were blessed by the gods",
    "were used to kill someone important",
    "were cursed by a witch",
    "were lost at sea",
    "were stolen by bandits",
    "were created as a result of a fae deal gone wrong",
    "were left on a boat",

    "will fix my marriage",

    // present tense
    "hurt people",
    "contain ancient secrets",
    "look like a goose",

    // past tense
    "played a key role in changing fate",
    "went missing years ago",

    // misc
    "everyone hates",
  ]
};

// story motivation, twist, and location
// NOTE: All of these values can become functions
const quest = {
  motivation: [
    "for comedy purposes",
    "for love",
    "for Scooby Doo reasons",
    "for the greater good",

    "to achieve communion with a spiritual manifestation outside of this world",
    "to fund their search for personal immortality",
    "to gain glory in the afterlife",
    "to make their cause better known",
    "to make someone's wife happy",
    "to tip the scales in their favor and gain the upper hand in an ongoing conflict",

    "so as to soothe their guilty conscience",

    "so that someone can get laid",
    "so that they can buy new farmlands",
    "so that they can frame someone",
    "so that they can get paid for once",
    "so that they can kick someone's ass",
    "so that they can return it before anyone notices that it's gone",
    "so that they can settle a grudge",
    "so that they can take down one of their enemies",
    "so that they won't be executed by royalty",
    
    "so they can get out of jury duty",
    "so they can get out of community service",
    "so they can put it on display and go 'heehee' every time they look at it",

    "because a mage ordered it",
    "because a vision told them so",
    "because corruption must end",
    "because cruelty inflicted by others causes them to hate, hate, hate",
    "because if they don't they will be executed",
    "because magic warped them to do evil",
    "because nobody else was doing it and it looked like it needed to be done",
    "because one of them made a pinky promise to a witch",
    "because rent is too damn high",
    "because someone asked really really nicely",
    
    "because their families are suffering",
    "because their friends and family are at risk",
    "because their leader has recurring dreams about it",
    "because their leader hears voices",

    "because of blackmail",
    "because of peer pressure",
    "because of sacred honor",
    "because of the enemy, which no one can remember why they hate each other anymore",
    "because of the failure of their previous plot",
    "because of unfairness",
    
    "because it is their divine right",
    "because it's how they get joy",
    "because it's required for membership in the elite club",
    "because it's technically their job",
    "because it will bring about the revolution",
    "because it will help them achieve one of their goals",
    "because it will provide them with strength in the coming days",
    "because it will restore balance",
    "because it would fulfill part of the prophecy",

    "because the abomination must be stopped",
    "because the ends justify the means",
    "because the innocent have suffered enough",
    "because the process stated it must be done",
    "because the prophecy demanded it",
    "because the world deserves it",
    "because the world is corrupt",

    "because they believe the only way to save a corrupt world is through corruption",
    "because they can't stand watching others be happy and at peace",
    "because they conspire to overthrow the King",
    "because they desire it above all else",
    "because they gave a promise to a dying mentor",
    "because they fear the darkness ahead",
    "because they feel responsible",
    "because they feel guilty",
    "because they lost a bet to a big bad guy",
    "because they misread a passage in a book",
    "because they need a new food source",
    "because they need a new home",
    "because they need angsty backstory motivation",
    "because they need to escape oppression",
    "because they need to make a little lad dance for them and he won't do it without the proper incentive",
    "because they quest to fulfill a prophecy",
    "because they quest to recover a lost technology or form of magic",
    "because they seek immortality",
    "because they seek redemption",
    "because they seek to boil off the oceans",
    "because they seek to rule the world",
    "because they serve an elder evil god",
    "because they serve a dark lord",
    "because they serve a devil prince",
    "because they serve an evil master from another dimension",
    "because they think it would save the world",
    "because they thought it was easy and needed the money",
    "because they will be killed if they don't",
    "because they wish to escape to another world",
    "because they wish to unleash the titans",

    "because they are above the law",
    "because they are actually gods",
    "because they are afflicted with a curse",
    "because they are afraid",
    "because they are afraid to be forgotten",
    "because they are afraid of their master",
    "because they are bored",
    "because they are cursed and doomed to die",
    "because they are demigods and want to ascend",
    "because they are desperate",
    "because they are destined to have it",
    "because they are dissatisfied with current trends",
    "because they are double agents",
    "because they are duty-bound to honor an agreement",
    "because they are dying of an unknown disease",
    "because they are getting paid",
    "because they are heartbroken their beloved leader was slain",
    "because they are hiding from several ghosts",
    "because they are jealous of their rivals' success",
    "because they are jilted",
    "because they are misguided",
    "because they are poor",
    "because they are rebels fighting an oppressive power",
    "because they are saboteurs for a foreign power",
    "because they are secretly part of 'the first'; the first group of humanoid to exist",
    "because they are selfish and unable to comprehend other's suffering",
    "because they are tired of being the ones to come in last",
    "because they are tired of the suffering",
    "because they are under a powerful geas spell from an evil wizard",

    "because they have been driven mad by nightmares",
    "because they have been lied to",
    "because they have crushing debts",
    "because they have run out of native unstable individuals to capture",
    "because they've been cursed by a priest of an ancient one",
    
    "because they want to activate nearby volacanoes",
    "because they want to avenge their lost ones",
    "because they want to be different than the rest",
    "because they want to be remembered forever",
    "because they want to become famous",
    "because they want to become powerful",
    "because they want to cause a mass extinction event",
    "because they want to commit mass murder of a nearby sttlement",
    "because they want to control trade of a certain good",
    "because they want to destroy a god",
    "because they want to find kidnapped royalty",
    "because they want to free their people",
    "because they want to gain respect",
    "because they want to get revenge",
    "because they want to get rich",
    "because they want to harm their (innocent) enemy",
    "because they want to leave a lasting impression to the world",
    "because they want to leave a legacy of suffering",
    "because they want to make the world better for their progeny",
    "because they want to offer this world to older evils",
    "because they want to prevent a plague from spreading",
    "because they want to rectify a perceived insult",
    "because they want to resurrect an ancient evil",
    "because they want to ruin the lands of an enemy",
    "because they want to start a war",
    "because they want to start an eternal fight",
    "because they want to upset the status quo",

    "because they were groomed for this since childhood",
    "because they were lied to",
    "because they were offended",
    "because they were ordered to",
    "because they were wronged and want revenge",
    
    "and have been ever since it was lost at sea",
    "as a means to depose someone in power",
    "even though they won't get paid",
    "mostly because they can",
  ],
  twist: [
    "a destructive device has been hidden in the area",
    "a disease is wiping them out",
    "a fire has broken out",
    "a god opposes them",
    "a natural disaster is coming",
    "a natural disaster occurs",
    "a new invention threatens their plans",
    "a rival was an ally all along",
    "a surprise visitor changes the situation",
    "a traitor is about to betray them",

    "an alarm has been triggered",
    "an enemy horde is rushing in",
    "an important reunion will go horribly off the rails",
    "an important prophecy will be delivered by a seer with a reputation for exaggeration",

    "the ancient sword they discovered will turn out to be junk",
    "the area is surrounded by enemy forces",
    "the authorities are quickly approaching",
    "the creatures escape",
    "the flood waters are rising",
    "the gods cannot be trusted",
    "the key is lost",
    "the most unexpected source has just brought them the missing component",
    "the odds are stacked against them",
    "the old are not wise in this story",
    "the person funding them has called in their debt",
    "the prophecy will not come true",
    "the public opinion is against them",
    "the real treasure will NOT be the friends that they made along the way",
    "the seasons are changing",
    "the stars aren't right yet",
    "the upcoming choices should not be made by one person alone",
    "the villain will escape at the end of this story",
    "the villain will soon try to stop them",

    "there have been whispers for a while that something is not right with the royal family",
    "there is a good chance that they will be attacked by a werewolf",
    "there is a spy in their midst",
    "there is a supernatural presence at the site",

    "their alliances are beginning to falter",
    "their allies are only passively helping",
    "their emotions will lead them astray",
    "their enemies are ahead of them",
    "their leadership is incompetent",
    "their magic is failing",
    "their numbers are dwindling",
    "their plan is in shreds",
    "their retreat is cut off behind them",
    "their rivals have beat them to it",

    "they are a week early",
    "they are all dying",
    "they are also fighting another enemy on a separate front",
    "they are betrayed by one of their own",
    "they are cursed",
    "they are flanked on all sides",
    "they are foiled by their own pride",
    "they are liable for their own actions and have no one to blame for the consequences but theirselves",
    "they are losing hope and are about to give up",
    "they are losing support",
    "they are not the only ones looking for it",
    "they are not the only ones with the same goals",
    "they are offered a bribe for abandoning their plans",
    "they are runnnig amok",
    "they are running out of time",
    "they are still searching for the right place",
    "they are too cautious, taking twice as long to make a move than necessary",
    "they are too reckless, taking wanton violence as the answer to anything that is not exclusively off limits",
    "they are underestimating their oppposition",
    "they aren't the only ones",

    "they do not know who to trust",
    "they don't have all of the information",
    "they don't know that they are simply pawns in a bigger game",
    "they don't know they are sleeper agents, about to activate",
    "they don't know they have already been compromised",
    "they don't really want to do it",
    "they don't seem to be the only group interested in this",

    "they believe too soon that they have succeeded",
    "they botched the formula",
    "they discover that by succeeding they would lose something important",
    "they discover that their old mentor has turned against them - and for all the right reasons",
    "they fell into a trap",
    "they finally understand that their actions have harmed themselves",
    "they find out that their victory would cause harm to innocents",
    "they follow a false prophecy",
    "they got false information",
    "they got squeamish",
    "they just recently escaped being prisoners and do not have as many resources as they are used to",
    "they lack an important resource",
    "they lost contact with their support network",
    "they lost their map",
    "they must form an uneasy alliance with the enemy to be able to face a new adversary",
    "they must wait until nighttime to act",
    "they need to be careful not to piss anybody off otherwise they WILL be having an afternoon tea party with the Barristers (aka die horribly)",
    "they squabble",
    "they start to believe that they have lost some of their sanity",
    "they understand that they no longer can trust their senses",
    
    "they have angered a divinity",
    "they have based their plans on erroneous information",
    "they have become unstable, and don't know it",
    "they have been ambushed twice already",
    "they have been lied to",
    "they have been overly taxed and do not have as many resources as they are used to",
    "they have been poisoned",
    "they have caught a terrible disease",
    "they have lost the instructions",
    "they have lost their leader",
    "they have lost their trump card",
    "they have not gathered all the necessary pieces",
    "they have to face another, more powerful enemy after conquering the first",
    "they have underestimated the difficulty involved",
    "they haven't found the right sacrifice",
    
    "this is the perfect opportunity for one of them to take vengeance",
    "this might be funny",
    "this might get us executed by royalty",
    "this story will have an unhappy ending",
    "this will turn out to be a red herring",

    "someone involved can't return home for a certain reason",
    "someone involved failed to protect someone once",
    "someone involved has a grudge to settle",
    "someone involved has a lot of hard lessons to learn",
    "someone involved has a reputation to salvage",
    "someone involved has a secret that musn't be revealed",
    "someone involved has long longed for something more",
    "someone involved has recently lost someone dear",
    "someone involved has to atone for a past misdeed",
    "someone involved is in denial about something important",
    "someone involved is often in the wrong place at the wrong time",
    "someone involved is pursuing someone else",
    "someone involved is still haunted by a past mistake",
    "someone involved owes a debt to someone powerful",
    "someone involved will harbor a hidden agenda the entire time",
    "someone involved will lose a limb in a horrific manner",
    "someone involved will make a mistake that will change everything",
   
    "someone is suspiscious of the head elder",
    "someone who was thought to be dead will return in the flesh",

    "everyone likes the new state of affairs better",
    "no one will believe them",
    
    "one of their own died too early",
    "one of them is a traitor",
    "one of them is arrested",
    "one of them is captured",

    "all the characters are animals",
    "components are expensive",
    "fear has gripped their hearts",
    "ghosts have targeted them",
    "hey, it might be fun anyways",
    "however bad they think this adventure is going to be, it is going to be WAY worse. Like way worse. Oh my god",
    "it gets worse",
    "it has become painful to walk in sunlight",
    "it is unstable",
    "not all is as it first appears",
    "surely nothing could possibly go wrong :)",
    "surely things can't get any worse than this! Spoiler alert: they can",
    "time is running out",
    "victory will come at great cost and sacrifice",
    "wait! There's more",
    "while they may accomplish their goals, there is a good chance that they will lose sight of what is most important in the process",
  ],
  // NOTE: These can all become place nouns that utilize a preposition function
  place: [
    "at a bizarre menagerie",
    "at a bridge",
    "at a dimensional nexus",
    "at a fortress under siege",
    "at a four-day alcohol-fueled jousting competition",
    "at a god's home",
    "at a grand celebration",
    "at a hive for giant bees",
    "at a lonely lighthouse",
    "at a mage's tower",
    "at a mass grave",
    "at a menhir circle",
    "at a performance",
    "at a VIP wedding ceremony",
    "at a wizard's home",

    "at an ancient stone henge",
    "at an arena with an event in progress",
    
    "at the bottom of a maze",
    "at the bottom of a waterfall",
    "at the bottom of the sea",
    "at the burial mounds of the ancient prison",
    "at the card tables",
    "at the castle in the sky",
    "at the catacombs",
    "at the caves under the mountain",
    "at the center of a former battlefield",
    "at the center of an active battlefield",
    "at the center of the dam",
    "at the center of town",
    "at the center under the darkest clouds",
    "at the crack of dawn",
    "at the crossroads at a new moon midnight",
    "at the crypt of a wizard",
    "at the dragon's lair",
    "at the edge of reality",
    "at the empire's capital",
    "at the end of the rainbow",
    "at the end of the world",
    "at the eye of a stationary storm",
    "at the feet of the sleeping titans",
    "at the forbidden section of a mage's library",
    "at the gates to the divine path",
    "at the guildhall",
    "at the kingdom armory",
    "at the kingdom treasury",
    "at the moment the seas part before them",
    "at the mysterious portal recently found",
    "at the noble's gathering",
    "at the old war monument",
    "at the river",
    "at the royal family's tomb",
    "at the ruins of a village that was fine the last time you saw it",
    "at the shores before the world's end",
    "at the top of a mountain",
    "at the top of a waterfall",
    "at the top of the waterfalls",
    "at the town hall",
    "at the witches' coven",

    "in a canyon",
    "in a cave",
    "in a druid's grove",
    "in a field",
    "in a flying castle",
    "in a flying fortress",
    "in a glacial fortress",
    "in a graveyard",
    "in a local cave that connects to underdark",    
    "in a local church",
    "in a leper colony",
    "in a mine",
    "in a month",
    "in a refugee camp",
    "in a secret facility",
    "in a town afflicted with the plague",

    "in the barrow-downs",
    "in the castle courtyard",
    "in the casinos",
    "in the catacombs",
    "in the cathedral",
    "in the city center",
    "in the desert",
    "in the dungeons",
    "in the Far Ethereal Plane",
    "in the gaming rooms",
    "in the hull of a ship",
    "in the library",
    "in the midst of a riot",
    "in the mountains",
    "in the museum",
    "in the necropolis",
    "in the plains",
    "in the prison",
    "in the sewers",
    "in the throne room",
    "in the tombs and catacombs of a large temple",
    "in the Tower of Darkness",
    "in the Tower of Light",

    "in three days",
    "in infected swamps",
    "in plain sight",

    "on a busy road",
    "on a storm-damaged ship",
    "on a swimming city",
    "on an island in the Astral Sea",

    "on the border",
    "on the highways",
    "on the lowest level of The Mad Wizard's dungeon",

    "on top of a mountain",

    "across the sea",
    "along the highway",
    "among the tombs of giants",
    "amongst a crowd",
    "atop a mesa of volcanic glass",
    "behind a waterfall",
    "beneath a bridge",
    "beside an old church",
    "between two dimensional vortexes",
    "by the King's road",
    "during the festival",
    "inside the inner chambers",
    "inside the skull of a dead god",
    "inside the volcano",
    "outside the palace walls",
    "outside the town",
    "near a cursed village",
    "near a magical spring",
    "near a volcano",
    "up a tree",
    "under the druid's grove",
  ]
}

// player characters, face roles, and first/last names
  // NOTE: add a section for titles
const characters = {
  fname:[
    "Billy","Bobby","Mary","Barry","Steven","Marlon","Rachel","Shelby","Eliza","Elizabeth","Joseph","Andy","Arietta","Morgan","Taylor","Tristan","Kai","Anabelle","Duke","Esteban","Antonio","Anthony","Tony","Jackie","Jacquelyn","John","Mike","Michael","Chev","Mandy","Sully","Joel","Roger","Peter","Connor","Brian","Brendan","Emmy","Isaac","Melissa","Jaime","Jesse","Dakota","Jackson","Sawyer","Xavier","Ester","Tien","Logan","James","Mason","Jason","Calvin","Caleb","Ada","Clay","Gerard","Amy","Lydia","Eugenia","Rose","Jade","Jane","Roxy","Dave","David","Alexis","Jake","Dirk","Sarah","Raleigh","Nikolai","Laila","Emerald","Marcus","Marc","Mark","Caroline","Katie","Kaitlin","Bridget","Haley","Jack","Lauren","Reya","Letitia","Axle","Alex","Rae","Fae","Danny","Dani","Hugo","Juan","Johnny","Paul","Dominic","Mia","Michelle","Dwayne","Chris","Antigone","Maria","Mehak","Vishali","Iris","Shane","Sam","Jimmy","Isabella","Wendy","Thomas","Dan","Daniel","Cris","Norbert","Arya","Cale","Jonathan","Jon","Merla","Sylora","Rhiann","Martin","Sasha","Tim","Timothy","Shiro","Shirou","Rin","Holly","Ace","Ed","Edward","Corvanna","Allura","Sakura","Shinji","Asuka","Rei","Richardo","Jose","Graham","Scott","Colin","Baran","Axi","Cali","Callie","Calypso","Ryuji","Valren","Abby","Adam","Alice","Ash","Asher","Ashley","Astra","Bunny","Clara","Daisy","Delilah","Donnie","Ember","Finnley","Gale","Grey","Hailey","Husky","Izzie","Jay","Juby","Kade","Kalandra","Kyle","Laika","Lana","Lexie","Link","Lucy","Luka","Luke","Luna","Marv","Marven","Max","May","Micah","Molly","Murphy","Naomi","Nat","Natalie","Nova","Parker","Penelope","Rabbit","River","Robin","Rochelle","Sean","Summer","Synth","Tara","Tyler","Vash","Void","Zoe","Zora","Cowry","Mutt","Winona","Elena","Hannah","Jordan","Fenn","Nari","Pierce","Howl","Patroclus","Owen","Agni","Firouz","Zale","Butch","Osborne","Mogan","Rycheld","Symond","Jayce","Tansa","Levi","Beneger","Avelin","Vesta","Savannah","Claudia","Somerhild","Radolf","Denston","Judithe","Nireus","Sulen","Teukos","Galen","Judith","Wren","Istvan","Chad","Alaren","Mars","Mari","Shadow","Danielle","Kim","Harry","Rebecca","Olivia","Chloe","Elisha","Jamie","Jody","Isabelle","Karver","Charles","Jill","Sandra","Damien","Cassandra","Carlos","Javier","Cynthia","Jayanti","Darwin","Ramiel","Sanna","Denny","Vera","Kenna","Emilia","Nora","Faeryl","Yastra","Lanius","Bain","Oza","Runa","Belagar","Tobor","Aligar","Huk","Prong","Hyloris","Leon","Ethan",
    // player names
    "Karlaen","Delawyn","Ursa","Elias","Agon","Jax","Jaxx","Alwin","Verdic","Baratraxar","Isla","Cove","Cerradus","Tallian","Waylund","Leisa","Tacitus","Jules","Sigmund","Relldar","Elen","Remi","Grylis","Azalea","Norain","Wren","Brandan","Calus","Alyssandra","Aly","Myrtle","Greg","Gregory","Gregor","Gregnobulous","Rina","Crittamon","Whisper","Artharias","Arthur","Theran","Brigid","Cayn","Ekyo","Clay","Fenrisse","Balthazar","Koth","Hilde","Zumlar","Cotter","Gizzet","Yinren","Alistair","Willow","Caleb","Zav","Zavriel","Minyo","Mallazyr","Dexter","Munta","Esther","Melea","Artemis","Esperanza","Lorik","Thordric","Hedrin","Taliesin","Seraphina","Maurmagil","Ezra","Nakoa","Eitri","Lucius","Matias","Ven","Trisrora","Hart","Catanya","Sage","Saige","Xanthion","Vendal","Chessaul","Indy","Vitae","Ajax","Wenek","Magnus","Marlo","Marlonious","Owen","Aishin","Alansar","Victus","Tass","Opulus","Geillia","Amuck",
    // face role names
    "Octavious","Dennis","Zephyr","Hesperides","Emmet","Arianaya","Aria","Euclid","Amaris","Baron","Dworrin","Ali","Paradiddle","Nalfor","Norrin","Geralt","Auranos","Getorix","Oleg","Johann","Amadeo","Dom","Yama"
  ],
  lname: [
    "Venitzo","Nightlocke","Shelley","Brando","Grey","Stevenson","Andrews","McGrath","Wheeler","Taylor","Brodey","Lee","Han","Collins","LeBeau","Blackwood","Jackson","Stratman","Smith","Filli","Miller","Merlino","Fox","Waldron","Rogers","Adams","de la Cruz","Delacruz","Santiago","Lessio","Belen","Rodriguez","Connors","Parker","Barnes","Price","Sawyer","Wolfe","Mayer","Howlett","Freyason","Foster","Reynolds","Thorne","Owens","Doe","Morse","Paura","Walters","Ivanofski","St.,Claire","Shaughnessy","Carson","Fianna","Delarose","Darwin","Red","Green","Perez","Runner","Walker","Toretto","DiArcangelo","Desantos","Tavares","Diamond","Wu","Demehri","Cahill","Brown","Fenton","Rienton","Sims","James","Wolfhide","Black","Stoker","Berry","Night","Caligo","Pereira","Rackham","Teach","Murphy","Ikari","Matou","Langley","Ayanami","Vantas","Captor","Darling","Peters","Lukas","Perotta","Thornton","Fitch","Finch","Rodruiguez","Campbell","Bell","Graham","O'Connor","McMurphy","Becket","Bandyabout","Behrand","Cantor","Crimsonvine","Godley","Oaks","Reed","Shipley","Bet","Merriweather","D'entopera","Hyde","Murray","Knuckles","Robotnik","Sonic","Tails","DuBois","Kitsuragi","Katsuragi","Whittaker","Whitten","Kane","Bridges","Drake","Mishra","Graves","Dodge","Kraghorn","Rhodenn","Kennedy","Winters",
    // player surnames
    "Sin'del","Liamour","Oak","Athear","Caradin","Malendarr","Bin","Corsica","Pachero","Farwhen","Hopsworth","Greynettle","Grey","Nettle","Marillon","Shallows","Cove","Shallowcove","Gratz","Kilgor","Vadi","Hooker","Bjorvika","Delandrielle","Dubois","Sharp","Sharptongue","Briarwood","Knox","Wulf","Arl","Naegling","Varin","Lamoran","Muckandmire","Frogmagourke","Duskwalker","Luckstryder","Slate","Brightheart","Starling","Stalgrim","Mystralith","Cornwall","Moonbright","Valgon","Caliban","Grimstone","Varnak","Urtgard","Appleheart","Hasselblöd","Teken","Tekentlar","Theynore","Glade","Zata","Tazata","Ovgar","Magestone","Longfellow","Finch","Mehri","Dew","Hawthorne","Grell","Mayax","Elson","Stonebreaker","Sihde","Nymval","L'Rhine","Silias","Ardak","Stillmyst","Anderson","Stormcloud","Trignot","Krane","Grom","Mabrik","Ambrosius",
    // face role surnames
    "Behran","Farmer","Zax","Calhoun","Bell","Dreveaux","Devereux","Fable","Denerethion","Stonethrust","Owlstone","Oddity","Merchant","Morehammer","Radd","Marielle","Ashbridge","Wahl","Hammersong","Roark","Galt","Becket","Zhao","Sourfang"
  ]
};

const verbs = {
  person: [
    "kill","bribe","summon","transport","torture","gather","curse","attack","assassinate","kidnap","marry","blackmail","dishonor","protect","unleash","destroy","escort","search for","trick","manipulate","impersonate","flee from","terrorize","embarrass","recruit","murder","coerce","catfish","defeat","worship","ally themselves with","bring low","win against","topple","pay","slaughter","awaken","write to","flee with","look for","tax","control","incite","prey on","drown","starve","proselytize","declare war on","play with","overthrow","make fun of","join","negotiate with","renegotiate with","appease","stick it to","enslave","fight against","become","lie to","cull","eliminate","cure","convert","conquer","dupe","challenge","wage war on","stifle","organize","sail","capture","cheat","propagate","perform for","sabotage","look for","abuse","impede","hinder","disfigure","forage","hide","seek","blockade","discover","raise","glean","keep","sacrifice","shirk","stir up","invoke","build up","secure","deny","resurrect","over-run","defile","slow","disguise","restore","get","daydream about","get involved with","betray","bind","bring back","bring","burn","catch","change","end","escape","expose","extinguish","find","form","free","heal","hold","locate","reset","revive","save","shame","turn back","unite","fulfill","banish","gain","show the inferiority of","crash","conspire with","make fun of","mimic"
  ],
  place: [
    "explore","curse","attack","travel to","protect","nap in","rob","destroy","search for","flee from","invade","terrorize","ally themselves with","topple","camp in","look for","tax","raze","control","picket","declare war on","expand","found","open","join","establish","implode","conquer","clear","wage war on","return to","sneak around","organize","build","capture","perform for","look for","disfigure","forage","hide","seek","blockade","discover","raise","glean","keep","sacrifice","shirk","stir up","invoke","build up","secure","deny","resurrect","over-run","defile","slow","disguise","restore","get","daydream about","get involved with","betray","bind","bring back","bring","burn","catch","change","end","escape","expose","extinguish","find","form","free","heal","hold","locate","reset","revive","save","shame","turn back","unite","fulfill","banish","gain","show the inferiority of","crash","squat in"
  ],
  thing: [
    "kill","summon","transport","steal","torture","hunt","gather","curse","enchant","disable","create","protect","unleash","destroy","escort","search for","earn","corner the market in","acquire","pay for","undo","complete","avert","flee with","look for","cause","sell","play with","make fun of","negotiate for","renegotiate for","make substantial profits on","erase","fake","clear","plan for","invest in","invest suspiciously heavily in","paint","excavate","deflect","quest for","vandalize","claim","make","take","break","eat","return","prove","start","shake","organize","request","propogate","look for","pass on","disfigure","forage","hide","seek","blockade","discover","raise","glean","keep","sacrifice","shirk","stir up","invoke","build up","secure","deny","resurrect","over-run","defile","slow","disguise","restore","get","daydream about","get involved with","betray","bring back","bring","burn","catch","change","end","escape","expose","extinguish","find","form","free","heal","hold","locate","reset","revive","save","shame","turn back","unite","fulfill","banish","gain","show the inferiority of","crash","traffic"
  ],
  concept: [
    "sow","spread","delay","plan for","impede","seek","raise","glean","keep","sacrifice","shirk","stir up","invoke","build up","secure","deny","defile","slow","disguise","restore","get","daydream about","bring back","bring","change","end","escape","expose","extinguish","find","form","hold","turn back","gain","show the inferiority of",
  ],
  continuous: [
    "tries to","attempts to","pretends to","plans to","intends to","wants to","needs to","threatens to"
  ]
}

const nouns = {
  person: {
    singular: [
      "king","chosen one","princess","empress","constable","mayor","Serpent God","local authority","little bitch","person of authority","lost loved one","cleric","divinity","rival","local noble","vampire","king","forgotten god","knight","monster","forgotten divinity","vampire lord","slayer","dragon","peasant girl","peasant boy","young boy","young girl","lad","lass","fruit-seller","gem merchant","sellsword","nomad","knight","gentleman thief","gentlewoman thief","soldier","monk","sorceror","enchanter","witch","warlock","warrior","mage","outlaw","ruffian","brigand","pickpocket","thief","woodsman","warlord","page","squire","troubadour","empress","emperor","noblewoman","nobleman","lord","lady","prince","princess","diplomat","monsterologist","swordmaster","apprentice","assassin-in-training","enchantress-in-training","summoner-in-training","witch-in-training","necromancer-in-training","prophet-in-training","sorceror-in-training","ogre","dragon","centaur","charlatan","vampire","genie","troll","dale elf","deep elf","dwarf","goblin","half elf","high elf","human","suhk","wildren","alchemist","artificer","bard","cleric","druid","fighter","paladin","ranger","rogue","runesmith","wizard","coalescer","excavator","harvester","logger","skinner","farmer","hunter","lumberjack","miner","panner","butcher","carpenter","gemcutter","glassmaker","papermaker","smelter","tanner","weaver","architect","blacksmith","brewer","chef","glassblower","lapidary","leatherworker","tailor","trapmaker","woodworker","appraiser","laborer","mender","eccentric candyman","retail employee","werewolf","feral child","snake-oil salesman","influencer","cowboy","pirate","rat","child psychologist","ghost hunter","archivist","creature","demolitions expert","goose","duelist","dog","construct","landlord","celebrity chef","village idiot","old guy","old lady","tax-evader","draft dodger","pyrotechnician","arsonist","professional arsonist","retired assassin","goth","clown","doctor","lawyer","con artist","grifter","lad in a fancy suit","hot girl","hot guy","hot person","malewife","entity","absent father","war criminal","shitty wizard","conspiracy theorist","adrenaline junkie","Italian","asshole","deadbeat dad","deadbeat mom","deadbeat parent","deadbeat","Little League coach","mobster","grad student","librarian","researcher","research assistant","entomologist","butch lesbian","dancer","singer","musician","historian","private investigator","detective","comedian","person","pro-wrestler","furry","girl","boy","candyman","retail employee","child","psychologist","guy","lad in a fancy suit","father","mother","dad","mom","parent","lesbian","idiot","raging anti-capitalist","CEO","union buster","dudebro","pharaoh","saber","archer","lancer","caster","rider","assassin","berserker","heroic spirit","chinchilla","goose","pseudo-dragon","toad","lapdog","pheasant","tortoise","cat","rabbit","baby","human baby"
    ],
    plural: [
      "travelers","officials","peasants","people","themselves","children","clerics","mages","martyrs","followers","hostages","slaves","new members","followers of another group","unstable individuals","long-extinct creatures","honest shopkeepers","younger citizens","thousands of ghosts","powerful friends","bribed officials","animals","citizens","army","cultists","militia members","government officials","puppet organization","colony of humanoids","people","army of undead","magical army","band of mercenaries","thousand tortured souls","squires","adventurers","assassins","fish people","drunken farmers","illusionists","settlers","werewolves","raiders","industrialists","acolytes","vampires","collectors","animals","land surveyors","rogues","elementals","goblin hunters","lowlives","knights","mercenaries","bardic actors","plants","nobles and their retinue","royalty","lepers","kobold trapsmiths","wizards","ancients","bandits","mendicant monks","giants","prisoners","dwarven archaeologists","con artists","alchemists","thieving travelers","villians","slaves","diplomats","doppelgangers","temple monks","rebels","runaways","psychics","tinkers","local spirits","masterless golems","druids","kings","diviners","travelling merchants","mysterious cloaked men","liches","sprites","traitors","monitors","scholars","guards","ousted monarchs","ghosts","militia members","children","orphan children","fairies","holy inquisitors","singers","enchanters","enchantresses","merchants","cavaliers","religious zealots","mummers","bards","dragons","otherwordly beings","dukes","duchesses","undead","slavers","escaped slaves","witches","planar travelers","charity mission workers","chaos worshippers","monks","priests","peasants","common folk","terrorists","defectors","pageboys","spies","foreign diplomats","nuns","nomads","plant creatures","philosophers","sea creatures","pirates","barons","ladies","teenagers","unemployed tradespeople","aristocrats","royals","scientists","necromancers","gnomes","masons","painters","senior villagers","housebreakers","fishermen","vintners","leatherworkers","intelligentsia","craftspersons","convicts","felons","smiths","homunculi","golems","bodysnatchers","vivisectionists","ax murderers","tulip growers","fey creatures","barbarians","scribes","crime bosses","drug lords","brothel keepers","veterans","draftees","deserters","masters","journeymen","home owners","shopkeepers","smugglers","corrupt politicians","mages","hags","violent vigilantes","three possums in a trench coat","another group","the homies","the dead","the law","the elderly","the aristocracy","the church","the militia","the rich","the court","the local crime underground","the masses","the ancients","'the man'","the mighty","another group","circus of clowns","heroic spirits"
    ]
  },
  place: {
    singular: [
      "building here in town","building site","church","city","court","cult","fortress","haven","illegal gambling ring","illicit underground unicorn fight club","kingdom","local tavern","magical gate","market","nation","portal to another dimension","settlement","village","wedding","werewolf lair",
    ],
    plural: [
      "churches","shrines","walls separating reality","the courts","the lands","the seas",
    ]
  },
  thing: {
    singular: [
      "sword","shield","bottle of alcohol","knife","dog","really cool cloak","really big knife","potion","really tiny knife","jar","steamy adult romance novel","cursed magical item","small horse","spyglass","pair of scissors","magic item","enourmous amount of gold","ancient song","fleet of warships","weak spot","cure","magical formula","Archwizard's legendary lost spellbook","new powerful magic book","trade war","trade monopoly","big pile of spaghetti","body","new divinity","powerful magic item","tome of unspeakable truths","menagerie of creatures","old rusty chain","family heirloom weapon","diadem of control","powerful magic wand","plague of locusts","strange music box","enchanted quill","key","ancient holy symbol","recently-found artifact","cursed weapon","very intricate and detailed masterplan","astrolabe","stolen artifact","ancient arrowhead","merfolk bridal veil","soulstone","new world order","divine audience","low profile","plague","new ethic","deal with the fae","legacy","rivalry","war","race","new society","new community","great wound upon the land","great wound upon the people","coup","truce","agreement with the archenemy","civil war","agreement","prophecy","riot","laissez-faire attitude","insatiable hunger","game that is also a test","meteor","holy grail","literal garbage","chinchilla","goose","pseudo-dragon","toad","lapdog","pheasant","tortoise","cat","rabbit","baby"
    ],
    plural: [
      "alcohol","arcane murals","contracts","creature hybrids","cursed armor","deceptive documents","diseased blankets","divine regalia","drugs","embalmed corpses","flows of gold","forbidden tomes","forged documents","kittens","lurid colors","magical man-catchers","secret documents","snakes","stolen teeth","public speeches",
    ]
  },
  concept: { // intangible objects
    singular: [
      "chaos","power","approval","information","duty","interest","rebellion","violence","blame","murder","trade","responsibility","opposition","control","peace","everything","history","magic","punishment","rest","revenge","time","reality","disaster","respect","destiny","disorder","treachery","leverage","misdirection","extortion","deception","blackmail","sabotage","espionage","bribery","cloning","financial compensation","false hope","unspeakable evil","unnatural disaster","threats and intimidation","extreme discretion","information from a contact person","frenzied devotion","mass hypnosis","iron will and determination","otherworldly help","the blame","the economy","the market","the next season","the notice of a god","the power of prayer","the power of the Ooze","the power vested in them by law","the prophecy","nausea"
    ],
    plural: [
      "alliances","blatant lies","deep pockets","divine blessings","fake identities","false promises","fame and prestige","little resources left","market manipulations","prices","privileges","public officials and decrees","pure wits","resources","rumors","sensitive divinations","the hopes of the whole village","the real answers",
    ]
  },
  // NOTE: should I add "their" as a wordPrep() preposition? Or would it make more sense to make a new function for adding possessive nouns?
  posessions: [
    // literally just nix most of the possessive nouns here and sort them into other subcategories
    "their bravery",
    "their children",
    "their collections",
    "their country for personal gain",
    "their debts",
    "their domains",
    "their dormant magical talent",
    "their goddess",
    "their insanity",
    "their lost honor", 
    "their names",
    "their past",
    "their people",
    "their place in history",
    "their reputation",
    "their rival",
    "their rival's disgrace",
    "their successors",
    "their targets",
    "their treasure",

    "someone's beloved pet",
    "someone's best friend",
    "someone's death",

    "a con artist's glib",
    "a dragon's hoard",
    "a dragon's support",
    "an elf's life essence",
    "a god's blessing",
    "a god's finger",
    "a plague's progression",
    "a prophecy's fulfillment",
    "a rival's masterwork",
    "a villain's weakness",

    "the queen's blessing",
    "the king's orders in hand",

    // posession of a person
    // NOTE: I feel like these count as things
    "the blood of the innocent",
    "the bones of an ancient mage",
    "the heart of a tree of life",
    "the help of bribed bureaucrats",
    "the iron hand of the tyrant",
    "the might of the kingdom's military",
    "the skull of a long-dead necromancer",
    "the support of the church",
    "the support of a mob",
    "the support of the noble court",

    "who they really are"
  ]
}

// IN PROGRESS - character traits/adjectives
  // four categories from fragments: 
  // they ARE, they HAVE, they THINK/FEEL, they DO
const traitMake = {
  opener: [
    // THEY ARE
    "is", // is, is a
    "is on",
    "can be",
    "tends to be",
    "used to be",
    "was",

    // THEY HAVE // (EDIT: possessive vs state of being?)
    "has", // has, has a
    "has no",
    "has not", // has not [done something]
    "has become",
    "no longer has",
    "does not have",
    "doesn't", // doesn't [do something] OR [feel something]

    // THEY THINK/FEEL
    "thinks",
    "believes",
    "likes",
    "really likes",
    "loves",
    "hates",
    "wants",
    "needs",

    // THEY DO
    "can", //can [do something]
    "tends to", // tends to [do something]
    "used to", // used to [do something]
  ],
  otherThing: [
    "kind",
    "past prime",
    "stubborn to a fault",
    "surprisingly gentle",
    "abrasive",
    "destructive",
    "taciturn",
    "suave",
    "quick-witted",
    "misunderstood",
    "innocent",
    "rather unpredictable",
    "unexpectedly charismatic",
    "soft-hearted",
    "deadpan",
    "prim",
    "puritanical",        
    "spineless",
    "rather incompetent",
    "bright",
    "sensible to a fault",
    "braver than most",
    "blind",
    "affable",
    "taciturn",
    "overly polite",
    "overly adventurous",
    "haunted",
    "hot",
    "divorced",
    "bisexual",
    "goth",
    "evil",
    "stinky",
    "nonbinary",
    "literally neurodivergent and a minor",
    "so hungover",
    "so close to snapping",
    "terrified of ducks",
    "really up their own ass about poetry",
    "currently facing a lawsuit",
    "currently running a scam",
    "banned from Applebee's",
    "banned from the Dancing Dragonfly",
    "plagued by visions",
    "blue for no reason",
    "reasonably horny",
    "unreasonably horny",
    "from hell",
    "from the LARP equivalent of Texas",
    "afraid of the dark",
    "really passionate about saving the bees",
  ]
}

// where fragments go after I tear them apart like confetti
const fragments = {
  trait: [ // character traits
    // four categories: they ARE, they HAVE, they THINK/FEEL, they DO
    // they ARE
    // is
    "is kind",
    "is past prime",
    "is stubborn to a fault",
    "is surprisingly gentle",
    "is abrasive",
    "is destructive",
    "is taciturn",
    "is suave",
    "is quick-witted",
    "is misunderstood",
    "is innocent",
    "is rather unpredictable",
    "is unexpectedly charismatic",
    "is soft-hearted",
    "is deadpan",
    "is prim",
    "is puritanical",        
    "is spineless",
    "is rather incompetent",
    "is bright",
    "is sensible to a fault",
    "is braver than most",
    "is blind",
    "is affable",
    "is taciturn",
    "is overly polite",
    "is overly adventurous",
    "is haunted",
    "is hot",
    "is divorced",
    "is bisexual",
    "is goth",
    "is evil",
    "is stinky",
    "is nonbinary",
    "is literally neurodivergent and a minor",
    "is so hungover",
    "is so close to snapping",
    "is terrified of ducks",
    "is really up their own ass about poetry",
    "is currently facing a lawsuit",
    "is currently running a scam",
    "is banned from Applebee's",
    "is banned from the Dancing Dragonfly",
    "is plagued by visions",
    "is blue for no reason",
    "is reasonably horny",
    "is unreasonably horny",
    "is from hell",
    "is from the LARP equivalent of Texas",
    "is afraid of the dark",
    "is really passionate about saving the bees",
    "is wearing an animal onesie",
    // is a
    "is a crank",
    "is a worrywart",
    "is a drifter",
    "is a chatterbox",
    "is a forgiving soul",
    "is a lover of books",
    "is a furry",
    "is a flat earther",
    "is a flat earther to be a dick",
    "is a bit of a daredevil",
    "is an arsonist",
    "is an alcoholic",
    "is a competitive little shit",
    "is a raging anti-capitalist",
    "is a CEO",
    "is a union-buster",
    "is a teenager",
    "is secretly a war criminal",
    // is on
    "is on holiday",
    "is on official business",
    "is on a pilgrimage",
    "is in disguise",
    // can be
    "can be restless",
    "can be ambitious",
    "can be independently-minded",
    "can be selfish",
    "can be sharp",
    "can be over-critical",
    "can be brusque",
    "can be cold",
    "can be detached",
    "can be judgemental",
    "can be vain",
    "can be stoic",
    "can be independently-minded",
    "can be pretentious",
    "can be tactless",
    "can be forgetful",
    "can be naïve",
    "can be overly pompous",
    "can be real dick",
    // tends to
    "tends to be reckless",       
    "tends to attract trouble",
    // used to be
    "used to be idealistic",
    "used to be selfish",
    "used to be a war criminal and has since been pardoned",
    // was
    "was found by the side of the road",
    "once was hopeful",
    
    // they HAVE
    // has
    "has burnt every bridge",
    "has 99 problems, and a sidekick is one of them",
    "has many controversial opinions",
    "has run away",
    "has the attention span of a goldfish",
    "has had their medical license revoked",
    "has already snapped",
    "has killed before and will kill again",
    "has got it going on",
    "has human eyes",
    "has interesting feelings about spiders",
    "has three weed-smoking girlfriends",
    "has blue hair and pronouns",
    "has their own fan club",
    // has a
    "has a lot of defense mechanisms",
    "has a tendency to be cowardly",
    "has a sense of humor",
    "has a reputation for being melodramatic",
    "has a strong moral compass",
    "has a reputation for being eccentric",
    "has a poker face",
    "has a headache",
    "has a fat ass",
    "has a cool hat",
    "has a child nemesis",
    "has a tiny creature for a sidekick",
    "has a penchant for truly terrible wordplay",
    "has an ongoing feud with the local mage's guild (don't ask)",
    // has no
    "has no moral code",
    "has no idea whats going on",
    // has not
    "has not laughed in a long time",
    "has not been around civilization for some time",
    "has not bathed in three weeks",
    // has become
    "has become aimless",
    "has become withdrawn",
    // has (misc)
    "no longer has any loyalties",
    "only has one outfit",
    "does not have human eyes",    
    "got their ears pierced at Claire's",

    // they THINK/FEEL
    // does not
    "doesn't talk to their parents",
    "doesn't believe in hell",
    "doesn't think the sun is real",
    // thinks
    "thinks they're a goose",
    "thinks they're hot shit",
    "thinks your mom is hot",
    "thinks your dad is hot",
    "thinks your parent of unspecified gender is hot",
    "thinks the earth is shaped like a donut because it's funny",
    "thinks the earth is shaped like a donut because they're kind of hungry right now",
    "thinks they're a full-sized dragon",
    // believes
    "believes all rumors to be true",
    "believes they are a gretch (they are not a gretch)",
    // loves
    "loves arguing",
    "loves puppets",
    "loves soup",
    "loves their wife",
    "loves to gossip",
    // likes
    "likes to break the fourth wall",
    "really likes dragons",
    // hates
    "hates children",
    "hates you personally",
    // wants
    "wants to show you pictures of their vacation",
    "wants to show you pictures of their kid",
    // needs
    "needs therapy",
    "needs a nap",
    "needs to get laid",
    // misc
    "considers themself to be morally grey but has committed several murders",

    // they DO
    "lies more often than not",
    "thrives on drama",
    "eats glue",
    "eats magic items",
    "smokes way too much weed",
    "smokes a regular amount of weed",
    "will die on any hill",
    "won't shut up about their kids",
    "would survive a Saw trap",
    "acts like an anime character",
    "solves all of their problems with card games",     
    "regularly commits tax fraud",
    "lies about their age",
    "lies through the newspaper",
    "faked their death",
    "denies any and all responsibility for... the incident",
    "woke up and chose violence",
    "vapes",
    "fucks",
    "naps in weird places",
    "wears way too much eyeliner",
    "went out for a pack of smokes and never returned",
    "took one philosophy class in university and won't shut up about it",
    "solves mysteries on the side",
    "plays the violin",
    "plays the piano",
    "minds their own business",
    "enjoys antiquities",
    "delights in awkward situations",
    "refuses to participate in the economy",
    "seems to be magical because they're covered in gemstones",
    "ran afoul of some kids with rhinestones and glue",
    "judges your spellcasting style",
  ],
  source: [ // rumor source
    "My cousin's friend told him that","My cousin's friend told her that","My cousin told me that","My friend overheard some patrons at the tavern talking about how","I overheard one of the town guard saying that","My friend heard that","I overheard someone saying that","A buddy of mine said that","You didn't hear this from me, but","Rumor has it that","Don't quote me on this, but I heard that","I don't know if this is true or not, but I heard that","I heard through the grapevine that","So get this — apparently","A friend of mine was telling me the other day that","A friend of a friend said that","I read in the newspaper that","The bartender slipped me a note that said that","The bartender gave me a heads up that","Someone gave me a heads up that","The spirits revealed to me that","Just trust me on this one, but","The town busybody said that","This might just be me being nosy, but","I'm usually one to mind my own business, but I heard that"
  ],
  goal: [
    "assume control",
    "become immortal",
    "become king",
    "become martyrs",
    "become rich",
    "betray their country for personal gain",
    "break the walls separating reality",
    "bring a lost loved one back to life",
    "bring peace",
    "build a haven",
    "burn everything",
    "catch the notice of a god",
    "change history",
    "clear their names",
    "conquer a nation",
    "convert others to their way of thinking",
    "create a legacy",
    "create a new divinity",
    "create a powerful magic item",
    "cure their insanity",
    "defeat a cleric",
    "defeat an army",
    "delay a wedding",
    "destroy",
    "destroy a divinity",
    "destroy a rival",
    "destroy a village",
    "destroy magic",
    "die",
    "discover a villain's weakness",
    "discover who they really are",
    "earn fame and prestige",
    "eliminate their rival",
    "embarrass a local noble",
    "end a rivalry",
    "end a war",
    "enslave their targets",
    "erase their past",
    "escape punishment",
    "expand their domains",
    "expose the court",
    "fight against a rival",
    "finally rest",
    "find the real answers",
    "form a cult",
    "form a new society",
    "found a new community",
    "free the princess",
    "free their people",
    "get revenge",
    "heal a great wound upon the land/people",
    "hide",
    "hide their treasure",
    "hold a coup",
    "hunt a vampire",
    "implode the court",
    "join the court",
    "keep their goddess happy",
    "kill a colony of humanoids",
    "kill a king",
    "locate a tome of unspeakable truths",
    "make substantial profits",
    "negotiate a truce",
    "negotiate an agreement with the arch enemy",
    "open a magical gate",
    "open a portal to another dimension",
    "overthrow the empress",
    "plan for the next season",
    "prove their bravery",
    "recruit followers",
    "reset time",
    "return the ancients",
    "revive a forgotten god",
    "save themselves",
    "shame a knight",
    "slaughter a group of people",
    "start a civil war",
    "start a new world order",
    "start a war",
    "stick it to 'the man'",
    "summon a monster",
    "turn back time",
    "undo reality",
    "unite the lands",
    "unleash unspeakable evil",
    "worship a forgotten divinity",
    "turn people undead",
    "ally themselves with a vampire lord",
    "awake thousands of ghosts",
    "find a werewolf lair",
    "pay their debts",
    "avert unnatural disaster",
    "avert disaster",
    "topple the kingdom",
    "earn respect",
    "fulfill a prophecy",
    "avert a prophecy's fulfillment",
    "cheat destiny",
    "save their children",
    "free hostages",
    "acquire hostages",
    "invoke the Serpent God",
    "restore their reputation",
    "incite a riot",
    "sow disorder",
    "expose treachery",
    "gain hostages",
    "gain leverage",
    "make a menagerie of creatures",
    "complete their collections",
    "shake the government",
    "avert doomsday",
    "show the inferiority of their successors",
    "cause their rival disgrace",
    "secure their place in history",
    "crash the economy",
    "corner the market",
    "renegotiate an agreement",
    "save the kingdom",
    "save the animals",
    "bring low the mighty",
    "fulfill the prophecy",
    "win the holy grail war"
  ],
  action: [
    // adventure seed generator
    "declaring war on",
    "recruiting new members",
    "terrorizing travelers",
    "investing suspiciously heavily in",
    "attempting to proselytize",
    "duping officials",
    "trying to pass a bribe",
    "abusing power",
    "attacking followers of another group",
    "exploring the seas",
    "taxing enourmous amount of gold",
    "manipulating the king",
    "spreading diseased blankets",
    "trying to slow a plague's progression",
    "making public speeches",
    "organizing peasants",
    "requesting a divine audience",
    "in disguise",
    "challenging people to a duel",
    "causing chaos",
    "raising the dead",
    "sailing away",
    "attempting to restore their lost honor",
    "razing a city",
    "building a fortress",
    "conspiring with another group",
    "trying to get approval",
    "on official business",
    "looking for the chosen one",
    "abusing the law",
    "being framed for murder",
    "sabotaging alliances",
    "gleaning information",
    "painting arcane murals",
    "excavating an ancient song",
    "building a fleet of warships",
    "impeding travellers",
    "performing sensitive divinations",
    "on a pilgramage",
    "keeping a low profile",
    "building a settlement",
    "controlling the militia",
    "capturing citizens",
    "looking for unstable individuals",
    "sacrificing themselves",
    "reconnaissancing for a weak spot",
    "seeking a cure",
    "preying on children",
    "cheating the elderly",
    "duping the aristocracy",
    "robbing clerics",
    "terrorizing mages",
    "shirking duty",
    "pretending interest",
    "stirring rebellion",
    "inciting violence",
    "deflecting blame",
    "questing for a magical formula",
    "searching for an Archwizard's legendary lost spellbook",
    "invoking privileges",
    "propagating a new ethic",
    "spreading a plague",
    "selling false hope",
    "writing a new powerful magic book",
    "spreading rumors",
    "waging a trade war",
    "building up a trade monopoly",
    "hindering trade",
    "manipulating prices",
    "securing resources",
    "denying resources",
    "resurrecting long extinct creatures",
    "picketing honest shopkeepers",
    "drowning kittens",
    "creating creature hybrids",
    "sabotaging a building site",
    "vandalizes a rival's masterwork",
    "trying to trick younger citizens",
    "claiming responsibility",
    "taking the blame",
    "stifling opposition",
    "over-running resources",
    "starving the masses",
    "defiling shrines",
    "'culling the herd'",
    "planning to estalish an illegal gambling ring",
    "intending to kidnap children from their parents",

    // rumor accuse
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
  ],
  means: [
    // adventure seed generator
    "with fake identities",
    "with an old rusty chain",
    "with a dragon's support",
    "with magical man-catchers",
    "with a family heirloom weapon",
    "with threats and intimidation",
    "with misdirection",
    "by pure wits",
    "with a diadem of control",
    "with a wand of magic missiles",
    "with forged documents",
    "with flows of gold",
    "with a plague of locusts",
    "with the iron hand of the tyrant",
    "by extorting the king",
    "with deception",
    "using a strange music box",
    "with extreme discretion",
    "with an enchanted quill",
    "by deception",
    "with a key",
    "with a rope of braided blood boar hair",
    "with forbidden tomes",
    "with powerful friends",
    "by applying information from a contact person",
    "with deep pockets",
    "by impersonating",
    "by summoning a construct",
    "by applying their dormant magical talent",
    "with an ancient holy symbol",
    "using secrets documents",
    "with a recently found artifact",
    "by the power vested to them by law",
    "with an army of undead",
    "claiming an old testament gives them the right",
    "with the skull of a long dead necromancer",
    "with a god's blessing",
    "with a laissez faire attitude",
    "with a cursed weapon",
    "with the king's orders in hand",
    "with a magical army",
    "using the power of prayer",
    "with a slayer",
    "with divine blessings",
    "with a band of mercenaries",
    "with a con artists glib",
    "with the heart of a tree of life",
    "with the support of the church",
    "applying a very intricate and detailed masterplan",
    "with a thousand tortured souls",
    "with an astrolabe",
    "with the bones of an ancient mage",
    "with the support of a mob",
    "with the help of bribed bureaucrats",
    "with blackmail",
    "with a god's finger",
    "with an insatiable hunger",
    "with false promises",
    "telling blatant lies",
    "by disguising as someone else",
    "by destroying a village",
    "with the blood of the innocent",
    "with contracts for the gullible",
    "with the might of the kingdom's military",
    "with the support of the noble court",
    "with a dragon's hoard",
    "with bribes to officials",
    "with a stolen artifact",
    "with an ancient arrowhead",
    "with frenzied devotion",
    "with a merfolk bridal veil",
    "by a game that is also a test",
    "with mass hypnosis",
    "with iron will and determination",
    "with divine regalia",
    "with the hopes of the whole village",
    "with a cursed armor",
    "with the queen's blessing",
    "with little resources left",
    "with the embalmed corpses of twin babies",
    "with a soulstone",
    "with an elf's life essence",
    "with an army",
    "with a dragon",
    "through public officials and decrees",
    "through a civil war",
    "through sabotage",
    "through espionage",
    "with drugs",
    "by controlling a puppet organization",
    "by bribery",
    "with alcohol",
    "with slaves",
    "by contracts",
    "with otherworldly help",
    "with the local authority",
    "with the local crime underground",
    "with market manipulations",
    "via cloning",
    "by the power of the Ooze",
    "by any means necessary",
    "with lurid colors",
    "with deceptive documents"
  ]
}

// move this array under a different category
const groups = [
  "order","horde","clique","gaggle","mob","collegium ","armed group","squad","cadre","trio","duo","quintet","pack","wandering troupe","crime ring","group","cabal","coven","gang","bunch","fellowship","posse","school class","syndicate","delegation","secret society","guild","extended family","noble house","platoon","caravan","sisterhood","work team","team","association","cartel","club","congregation","gentlemen's club","faction","crew","hidden society","league","converstation club","religious sect","tribe","elite squad","brotherhood","charity organization","support staff","entourage","assembly","noble family","governing body","ensemble","conclave","coterie","organization","circle","partnership","society","party","cult","group","troop","army","mass","gathering","political faction","inbred family","choir","crowd","splinter faction","band","conspiracy","clan","collegium","patchwork","network","cell","panel","doomsday cult","union","collective","circus"
];

// IN PROGRESS - build this array out
const adjective = [
  "peasant","young","fruit-selling","gentleman","gentlewoman","apprentice","charlatan","vampire","dale elf","deep elf","dwarf","goblin","half elf","high elf","human","suhk","wildren","eccentric","werewolf","feral","influencer","child","celebrity","old","tax-evading","draft-dodging","professional","retired","goth","little","hot","absent","shitty","Italian","asshole","deadbeat","butch","dancing","singing","paramilitary","military","suicidal","fleeing","organized","insatiable","sickened","lusty","maniacal","unorganized","pugilistic","busybody","evil","sociopathic","underground","dying","benevolent","arsonistic","disorganized","convicted","noble","liar","chaotic","malicious","murderous","pugnacious","secret","elderly","violent","unharmonious","devious","surreptitious","quarelling","ideologically split","ragged","cursed","good","enlightened","zealous","heroic","amnesiac","resurrected","fey-touched","elite","lycanthropic","escaped","injured","commissioned","official","random","self-pitying","well-dressed","xenophobic","superstitious","drunk","depressive","morbid","mortally wounded","diseased","contrite","hateful","alcoholic","drug-addicted","fanatical","homeless","confused","artistic","desperate","suspicious","unaccountable","exhausted","vocal","undead","shady","righteous","plaintive","cowardly","insane","unscrupulous","oppressed","conned","fallen","undercover","reluctant","bloodthirsty","otherworldly","celestial","outsider","insectoid","brilliant","greedy","materialistic","unholy","ancient","obsessive","sole","outgrown","renowned","rich","poor","reformed","secretive","paranoid","compulsive","perverse","iconoclastic","nihilistic","former","underappreciated","kindly","unique","teenage","corny","entire","chainsmoking","passive-aggressive","really fat"
];

///////////////////////////////////////
//// NON-STORY GENERATOR FUNCTIONS
///////////////////////////////////////
// random string for all generators
function randomString(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

// adds "a" or "an" as a preposition. if it sees "the" or "another" at the front or a word it leaves it alone
function wordPrep(word) {
  if (["the ","another "].some((elem) => word.startsWith(elem))) {
    prep = "";
  } else if (["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].some((elem) => word.startsWith(elem)) && !word.startsWith("uni")) {
    prep = "an ";
  } else {
    prep = "a ";
  }
  prep += word;
  return prep;
}

function checkForPrep(string) {
  if (string.startsWith("the ")) {
    string = string.slice(4);
  } else if (string.startsWith("another ")) {
    string = string.slice(8);
  }
  return string;
}

// adds singular possessive 's to the end of a noun
// do something where the possessive changes if singular or plural
function wordPoss(word) {
  word += "'s";
  return word;
}

// subject-verb agreement
function svaAgree(sva) {
  if (sva.startsWith("singular")) {
    sva = "is";
  } else if (sva.startsWith("plural")) {
    sva = "are";
  }
  return sva;
}

// capitalizes the first letter of a string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/////////////////
//// GERUNDS
/////////////////
// adds double letter
function doubleLetter(word) {
  const consonant = ["b","d","l","m","n","p","r","t"];
  const vowel = ["a","e","i","o","u"];
  const exceptions = ["ai","de","ea","ee","ga","he","ke","mo","ne","no","oi","te","ue","ui","ve",];
  
  var lastLetter = word.charAt(word.length-1);
  var beforeLast = word.charAt(word.length-2);
  var twoBeforeLast = word.charAt(word.length-3) + beforeLast;

  if (consonant.includes(lastLetter) && vowel.includes(beforeLast) && !exceptions.includes(twoBeforeLast)) {
    word += lastLetter;
  }
  return word;
}

// changes "c" to "ck", "ie" to "y", and removes silent "e"
function letterChange(word) {
  if (word.endsWith("c")) {
    word += "k";
  } else if (word.endsWith("ie")) {
    word = word.substring(0, word.length - 2);
    word += "y";
  } else if (word.endsWith("e") && !["ee","oe","ye"].some(elem => word.endsWith(elem))) {
    word = word.substring(0, word.length - 1);
  }
  return word;
}

// checks through special rules for adding -ing to the end of a verb
function letterCheck(word) {
  word = doubleLetter(word);
  word = letterChange(word);
  return word;
}

function wordGer(word) { // present verbs
  if (word.includes(" ")) {
    var space = word.search(" ");
    var verb = word.slice(0, space);
    var phrase = word.slice(space);        
    word = [letterCheck(verb), "ing", phrase].join("");
  } else {
    word = letterCheck(word);
    word += "ing";
  }
  return word;
}

function contGer(word) { // continuous verbs
  var space = word.search(" ");
  var verb = word.slice(0, space);
  var phrase = word.slice(space);
  
  verb = verb.substring(0, verb.length -1);
  word = [letterCheck(verb), "ing", phrase].join("");
  return word;
}

///////////////////////////////////
//// VERBS AND NOUNS
///////////////////////////////////
// noun ref vars
var nounPerson = nouns.person;
var nounPlace = nouns.place;
var nounThing = nouns.thing;
var nounConcept = nouns.concept;

class Verb {
  constructor(noun) {
    this.present = "";
    if (noun == nounPerson.singular || noun == nounPerson.plural) {
      this.present = randomString(verbs.person);
    } else if (noun == nounPlace.singular || noun == nounPlace.plural) {
      this.present = randomString(verbs.place);
    } else if (noun == nounThing.singular || noun == nounThing.plural) {
      this.present = randomString(verbs.thing);
    } else if (noun == nounConcept.singular || noun == nounConcept.plural) {
      this.present = randomString(verbs.concept);
    }

    this.gerund = wordGer(this.present);
  }
}

class Noun {
  constructor() {
    this.noun = "";
    this.nounType = "";
    this.condition = "";

    const singular = [
      nounPerson.singular, nounPlace.singular, nounThing.singular, nounConcept.singular
    ];
    const plural = [
      nounPerson.plural, nounPlace.plural, nounThing.plural, nounConcept.plural
    ];
    const nouns = [
      singular, plural
    ];

    const type = randomString(nouns); // singular, plural
    this.subtype = randomString(type); // person, place, thing, etc
    const select = randomString(this.subtype); // noun from that array
    this.nounSelect = select; // stores the noun selection

    // selects a random singular or plural noun 
    // NOTE: singular concept nouns don't get a preposition
    if (type == plural || this.subtype == nounConcept.plural) {
      this.noun = select;
      this.nounType = "plural";
      this.condition = randomString(property.plural);
    } else if (this.subtype == nounConcept.singular) {
      this.noun = select;
      this.nounType = "singular"
      this.condition = randomString(property.singular);
    } else if (type == singular) {
      this.noun = wordPrep(select);
      this.nounType = "singular"
      this.condition = randomString(property.singular);
    }
  }
}

///////////////////////////////////////////
//// CHARACTER CREATOR
///////////////////////////////////////////
class Chara {
  constructor() {
    const charaNoun = randomString(nounPerson.singular);
    const adj = randomString(adjective);
    const trait = randomString(fragments.trait);
    const fname = randomString(characters.fname);
    const lname = randomString(characters.lname);
    let fullName = fname + " " + lname;

    this.desc = wordPrep(charaNoun) + "</b> who <b>" + trait;
    this.cat = wordPrep(adj) + " " + charaNoun;
    this.con = this.cat + "</b> who <b>" + trait;
    this.first = wordPrep(charaNoun) + "</b> named <b>" + fname + "</b> who <b>" + trait;
    this.full = wordPrep(charaNoun) + "</b> named <b>" + fullName + "</b> who <b>" + trait;
  }
}

function charaSelect() { // used in rumorGen()
  const fname = randomString(characters.fname);
  const lname = randomString(characters.lname);
  const person = randomString(nounPerson.singular);
  let fullName = fname + " " + lname;

  const charaList = {
    "chara 1": "<b>" + fname + "</b>",
    "chara 2": "<b>" + fullName + "</b>",
    "chara 3": "someone called <b>" + fullName + "</b>",
    "chara 4": "<b>" + wordPrep(person) + "</b> named <b>" + fname + "</b>"
  }

  const keys = Object.keys(charaList);
  const type = randomString(keys);
  const chara = charaList[type];
  return chara;
}

////////////////////////////////////
//// SELECTOR TEMPLATES
////////////////////////////////////
// people consts
const singlePerson = ["singular 1", "singular 2"];
const pluralPerson = ["plural 1", "plural 2"];
const personList = singlePerson.concat(pluralPerson);

// action consts
const actionVerb = ["action 1", "action 2"];
const actionCont = ["action 3", "action 4"];
const actionList = actionVerb.concat(actionCont);

// method const
const methodList = [
  "method 1", "method 2", "method 3", "method 4", "method 5", "method 6"
];

////////////////////////////////////
//// SELECTOR FUNCTIONS
////////////////////////////////////
// person select
function personSelect() {
  const adj = randomString(adjective);
  const trait = randomString(fragments.trait);    
  const group = randomString(groups);
  const members = randomString(nounPerson.plural);
  const noun = randomString(nounPerson.singular);

  // I could probably wordPrep this entire thing in the generator function rather than up here. It may make more sense
  const subjects = {
    "singular 1": noun + "</b> who <b>" + trait + "</b>",
    "singular 2": adj + " " + noun + "</b>",
    "plural 1": group + "</b> of <b>" + members + "</b>",
    "plural 2": adj + " " + group + "</b> of <b>" + members + "</b>"
  }

  const keys = Object.keys(subjects);
  const type = randomString(keys);
  const subject = wordPrep(subjects[type]);
  const subjectSelect = subjects[type];
  const sva = svaAgree(type);    
  return {subject, subjectSelect, sva};
}

// action select
function actionSelect(contVar, noun, verbPres, verbGer) { 
  let action = "";
  let select = "";
  
  select = randomString(actionList);
  if (contVar === false) {
    select = randomString(actionVerb);
  }

  const fragment = randomString(fragments.action);
  const verbContPres = randomString(verbs.continuous);
  const verbContGer = contGer(verbContPres);
  const actions = {        
    "action 1": "<b>" + fragment, //pre-existing action
    "action 2": "<b>" + verbGer + " " + noun, //[verb]ing [noun]
    "action 3": "<b>" + verbContGer + " " + verbPres + " " + noun, //[trying] to [verb] [noun]
    "action 4": "<b>" + verbContPres + " " + verbPres + " " + noun + "</b>" //[tries] to [verb] [noun]
  }

  for (const act in actions) {
    if (act == select) {
      action = actions[act];
    }
  }

  return {action, select};
}

// method select
function methodSelect(noun, verbGer) { 
  const fragment = randomString(fragments.means);
  const owner = randomString(nounPerson.singular);
  const methods = {
    "method 1": fragment,
    "method 2": "</b>" + "using <b>" + noun,
    "method 3": "</b>" + "with <b>" + noun,
    "method 4": "</b>" + "with the help of <b>" + noun, 
    // [action] by [gerund] [action] // (EDIT: i think this is an idea for another method. Otherwise this means nothing)
    "method 5": "</b>" + "by <b>" + verbGer + " " + noun,
    "method 6": "</b>" + "by utilizing <b>" + wordPrep(owner) + "'s " + noun + "</b>"
  }

  const keys = Object.keys(methods);
  const type = randomString(keys);
  const method = methods[type];
  return method;
}

// subject assist
function subjectCheck(select, person, sva, action) {
  if (select == "action 4") {
    subject = person + " " + action;
  } else {
    subject = person + " " + sva + " " + action;
  }
  return subject;
}

////////////////////////////
//// PLOT TEMPLATES
////////////////////////////
// NOTE: there has GOT to be a better naming convention for some of these values. "two people 5"? C'mon, man

// people consts
const npcOne = ["one person 1","one person 2","one person 3","one person 4","one person 5"];
const npcTwo = ["two people 1","two people 2","two people 3","two people 4","two people 5"];
const npcThree = ["three people 1","three people 2","three people 3","three people 4","three people 5"];
const npcParty = npcOne.concat(npcTwo, npcThree);

// plot template consts
const plotType = ["plot 1","plot 2","plot 3"];
const questType = ["quest 1","quest 2"];
const adventureType = [
  "adventure 1","adventure 2","adventure 3","adventure 4"
];
const storyType = plotType.concat(questType, adventureType);

// rumor templates
const rumorType = [
  "rumor 1","rumor 2","rumor 3","rumor 4","rumor 5","rumor 6","rumor 7","rumor 8","rumor 9","rumor 10","rumor 11"
];

///////////////////////////////
//// GENERATOR FUNCTIONS
///////////////////////////////

// PLOT BUILDER – the big boy :)
function plotCreate() { 
  let story = "";
  let plotSelect = ""; // uses templates from checkboxes
  
  // if nothing is checked, default to all
  plotSelect = randomString(checkOptions());
  if (plotSelect === undefined) { 
    plotSelect = randomString(storyType);
  }

  const goal = randomString(fragments.goal);
  const motive = randomString(quest.motivation);
  const twist = randomString(quest.twist);
  const location = randomString(quest.place);
  
  const tone = randomString(plots.tone);
  const genre = randomString(plots.genre);

  // nouns – groups one and two
  const nounOne = new Noun();
  const nounTwo = new Noun();

  // verbs – groups one and two
  const verbOne = new Verb(nounOne.subtype);
  const verbTwo = new Verb(nounTwo.subtype);

  // person select
  const subject = personSelect();
  const plotPerson = subject.subject;
  const sva = subject.sva;

  // action select
  let contVar = true;
  const action = actionSelect(contVar, nounOne.noun, verbOne.present, verbOne.gerund);
  const plotAction = action.action;
  const actionType = action.select;
  
  const plotMethod = methodSelect(nounTwo.noun, verbTwo.gerund);
  const plotSubject = subjectCheck(actionType, plotPerson, sva, plotAction);

  // NEXT: trying to [action thing] to [other people]
  const stories = {
    // Plot 1 - Plot 3
    "plot 1": "This is <b>" + wordPrep(tone) + " " + genre + "</b> story",

    "plot 2": "This is <b>" + wordPrep(tone) + " " + genre + "</b> story in which <b>" + plotSubject + "</b> in order to <b>" + goal + ".</b> The twist is that <b>" + twist,
    
    "plot 3": "This is <b>" + wordPrep(tone) + " " + genre + "</b> story where <b>" + plotSubject + "</b> in order to <b>" + goal,
    
    // Quest 1 - Quest 2
    "quest 1": "The party is looking for <b>" + nounOne.noun + "</b> that <b>" + nounOne.condition + ".</b> They are looking for this <b>" + motive + ",</b> but the thing is that <b>" + twist,
    
    "quest 2": "The party is looking for <b>" + nounOne.noun + "</b> that <b>" + nounOne.condition + "</b> in order to <b>" + goal + ".</b></p>" + "<p>They want this <b>" + motive + ",</b> but what they haven't realized yet is that <b>" + twist,
    
    // Adventure 1 - Adventure 4
    "adventure 1": "In this story, <b>" + plotSubject + "</b> <b>" + location  + ".</b></p>" + "<p>Their goal is to <b>" + goal + " " + plotMethod + " " + motive + ",</b> but <b>" + twist,
    
    "adventure 2": "In this story, <b>" + plotSubject + "</b> in order to <b>" + goal,
    
    "adventure 3": "In this story, <b>" + plotSubject + ".</b> They are doing this <b> " + motive,
    
    "adventure 4": "This story takes place <b>" + location +",</b> where <b>" + plotSubject + ".</b> Their goal is to <b>" + goal + " " + plotMethod + ".</b></p>" + "<p>They are doing this <b>" + motive + ",</b> but <b>" + twist,
  }

  for (const plot in stories) {
    if (plot == plotSelect) {
      story = stories[plot];
    }
  }

  document.querySelector(".output").innerHTML = "<p>" + story + ".</b></p>";
}

// Fetch Quest
function questGen() {
  let questSelect = randomString(questType);
  let storyQuest = "";

  const noun = new Noun();
  const goal = randomString(fragments.goal);
  const motive = randomString(quest.motivation);
  const twist = randomString(quest.twist);

  const quests = {
    "quest 1": "The party is looking for <b>" + noun.noun + "</b> that <b>" + noun.condition + ".</b> They are looking for this <b>" + motive + ",</b> but the thing is that <b>" + twist,
    
    "quest 2": "The party is looking for <b>" + noun.noun + "</b> that <b>" + noun.condition + "</b> in order to <b>" + goal + ".</b> They want this <b>" + motive + ",</b> but what they haven't realized yet is that <b>" + twist
  }

  for (const story in quests) {
    if (story == questSelect) {
      storyQuest = quests[story];
    }
  }

  document.querySelector(".output").innerHTML = "<p>" + storyQuest + ".</b></p>";
}

// Adventure Generator
function adventureGen() {
  let adventureSelect = randomString(adventureType);
  let agPlot = "";

  const goal = randomString(fragments.goal);
  const motive = randomString(quest.motivation);
  const twist = randomString(quest.twist);
  const location = randomString(quest.place);

  // nouns – groups one and two
  const nounOne = new Noun();
  const nounTwo = new Noun();

  // verbs – groups one and two
  const verbOne = new Verb(nounOne.subtype);
  const verbTwo = new Verb(nounTwo.subtype);

  // person select
  const subject = personSelect();
  const agPerson = subject.subject;
  const sva = subject.sva;

  // action select
  let contVar = true;
  const action = actionSelect(contVar, nounOne.noun, verbOne.present, verbOne.gerund);
  const agAction = action.action;
  const actionType = action.select;

  const agMethod = methodSelect(nounTwo.noun, verbTwo.gerund);
  const agSubject = subjectCheck(actionType, agPerson, sva, agAction);

  const adventures = {
    "adventure 1": "In this story, <b>" + agSubject + " " + location  + ".</b></p>" + "<p>Their goal is to <b>" + goal + " " + agMethod + " " + motive + ",</b> but <b>" + twist,
    
    "adventure 2": "In this story, <b>" + agSubject + "</b> in order to <b>" + goal,
    
    "adventure 3": "In this story, <b>" + agSubject + ".</b> They are doing this <b> " + motive,
    
    "adventure 4": "This story takes place <b>" + location +",</b> where <b>" + agSubject + ".</b> Their goal is to <b>" + goal + " " + agMethod + ".</b></p>" + "<p>They are doing this <b>" + motive + ",</b> but <b>" + twist,
  }

  for (const story in adventures) {
    if (story == adventureSelect) {
      agPlot = adventures[story];
    }
  }

  document.querySelector(".output").innerHTML = "<p>" + agPlot + ".</b></p>";
}

// Compass Rose
const compassType = [
  // "compass 1",
  // "compass 2",
  // "compass 3",
  // "compass 4",
  // "compass 5",
  "compass 6"
];

function compassGen() {
  let directionSelect = randomString(compassType);
  let direction = "";

  // const goal = randomString(fragments.goal);
  const motive = randomString(quest.motivation);
  const twist = randomString(quest.twist);
  const locationOne = randomString(quest.place);
  const locationTwo = randomString(quest.place);
  
  // const tone = randomString(plots.tone);
  // const genre = randomString(plots.genre);

  // nouns – groups one and two
  const nounOne = new Noun();
  // const nounTwo = new Noun();

  // verbs – groups one and two
  // const verbOne = new Verb(nounOne.subtype);
  // const verbTwo = new Verb(nounTwo.subtype);

  // person select one
  const subjectOne = personSelect();
  const plotPersonOne = subjectOne.subject;
  const plotPersonSelectOne = subjectOne.subjectSelect;
  const svaOne = subjectOne.sva;

  // person select two
  const subjectTwo = personSelect();
  const plotPersonTwo = subjectTwo.subject;
  // const plotPersonSelectTwo = subjectTwo.subjectSelect;
  // const svaTwo = subjectTwo.sva;

  // action select
  // let contVar = true;
  // const action = actionSelect(contVar, nounOne.noun, verbOne.present, verbOne.gerund);
  // const plotAction = action.action;
  // const actionType = action.select;
  
  // const plotMethod = methodSelect(nounTwo.noun, verbTwo.gerund);
  // const plotSubject = subjectCheck(actionType, plotPerson, sva, plotAction);

  const points = {
    // "compass 1": "What are we looking for? What is its nature? What characteristics does it have?",
    // "compass 2": "How can this help us? What purpose does it serve?",
    // "compass 3": "Where is it? What elements surround its location? What landmarks can help guide our journey?",
    // "compass 4": "Who or what can help us find what we're searching for? Where might we find them?",
    // "compass 5": "What do we need to watch out for or be careful of? What obstacles stand in our way?",
    
    // A [PERSON 1] is looking for a [THING] that [PROPERTY]. They need this [NOUN] because [REASON]. The [THING] is located in the [LOCATION 1]. The [PERSON 1] must enlist the help of [PERSON 2], who can be found in [LOCATION 3]. But [TWIST].
    "compass 6": "<b>" + capitalize(plotPersonOne) + " " + svaOne + " looking for <b>" + nounOne.noun + "</b> that <b>" + nounOne.condition + ".</b> They are looking for the <b>" + checkForPrep(nounOne.nounSelect) + " " + motive + ".</b> The <b>" + checkForPrep(nounOne.nounSelect) + "</b> " + svaAgree(nounOne.nounType) + " located <b>" + locationOne + ",</b> so the <b>" + plotPersonSelectOne + "</b> must enlist the help of <b>" + plotPersonTwo + " <b>" + locationTwo + "</b> in order to find it. But what the <b>" + plotPersonSelectOne + "</b> doesn't know is that <b>" + twist
  }

  for (const compass in points) {
    if (compass == directionSelect) {
      direction = points[compass];
    }
  }

  document.querySelector(".output").innerHTML = "<p>" + direction + ".</b></p>";
}

// NPC Builder
function npcGen() {
  let partySelect = "";
  let partyBuild = "";
  var add = ",</b> and <b>";

  partySelect = randomString(checkOptions());
  if (partySelect === undefined) {
    partySelect = randomString(npcParty);
  }

  const charaOne = new Chara();
  const charaTwo = new Chara();
  const charaThree = new Chara();

  // I wonder if I can randomize these like how the name pdf has it // (EDIT: which fucking pdf?)
  // there has GOT to be a better way to do this
  const party = {
    "one person 1": charaOne.desc,
    "one person 2": charaOne.cat,
    "one person 3": charaOne.con,
    "one person 4": charaOne.first,
    "one person 5": charaOne.full,
    "two people 1": charaOne.desc + add + charaTwo.desc,
    "two people 2": charaOne.cat + add + charaTwo.cat,
    "two people 3": charaOne.con + add + charaTwo.con,
    "two people 4": charaOne.first + add + charaTwo.first,
    "two people 5": charaOne.full + add + charaTwo.full,
    "three people 1": charaOne.desc + ", " + charaTwo.desc + add + charaThree.desc,
    "three people 2": charaOne.cat + ", " + charaTwo.cat + add + charaThree.cat,
    "three people 3": charaOne.con + ", " + charaTwo.con + add + charaThree.con,
    "three people 4": charaOne.first + ", " + charaTwo.first + add + charaThree.first,
    "three people 5": charaOne.full + ", " + charaTwo.full + add + charaThree.full
  }

  for (const people in party) {
    if (people == partySelect) {
      partyBuild = party[people];
    }
  }

  document.querySelector(".output").innerHTML = "<p>Our party includes <b>" + partyBuild + ".</b></p>";
}

// Rumor Generator
function rumorGen() {
  let rumorSelect = randomString(rumorType);
  let rumor = "";

  const charOne = charaSelect();
  const charTwo = charaSelect();
  const nounPers = randomString(nounPerson.singular);

  const noun = new Noun();
  const verb = new Verb(noun.subtype);

  // action should NOT be "cont present, present, noun"
  let contVar = false;
  let action = actionSelect(contVar, noun.noun, verb.present, verb.gerund);
  const accuse = action.action;
  // const accuseType = action.type;

  const source = randomString(fragments.source);
  const trait = randomString(fragments.trait);

  // note: figure out subject-verb agreement between item and condition
  const rumors = {
    "rumor 1": charOne + " has <b>" + noun.noun + "</b> that <b>" + noun.condition,
    "rumor 2": charOne + " is looking for <b>" + noun.noun + "</b> that <b>" + noun.condition,
    "rumor 3": charOne + " is looking for <b>" + noun.noun,
    "rumor 4": charOne + " is looking for some help with something",
    "rumor 5": charOne + " is " + accuse,
    "rumor 6": charOne + " was seen " + accuse + "</b> with <b>" + charTwo,
    "rumor 7": charOne + " was asking around for <b>" + wordPrep(nounPers),
    "rumor 8": charOne + " was asking around for someone who <b>" + trait,
    "rumor 9": charOne + " was asking around for <b>" + charTwo,
    "rumor 10": charOne + " <b>" + trait,
    "rumor 11": charOne + " is <b>" + wordPrep(nounPers),
  }

  for (const gossip in rumors) {
    if (gossip == rumorSelect) {
      rumor = rumors[gossip];
    }
  }

  document.querySelector(".output").innerHTML = "<p>" + source + " " + rumor + ".</b></p>";
}

//////////////////////////////
//// CHECKBOXES AND BUTTONS
//////////////////////////////
const plotPieces = {
  "pbQuest": questType,
  "pbAdventure": adventureType,
  "pbType": plotType,
  "charOne": npcOne,
  "charTwo": npcTwo,
  "charThree": npcThree
}

// picks from plot arrays based on checkboxes selected
function checkOptions() {
  const select = Array.from(document.getElementsByTagName("input"));
  const options = [];
  select.forEach(elem => {
    var subs = elem.getAttribute("type");
    if (subs == "checkbox" && elem.checked) {
      var x = elem.getAttribute("id");
      options.push(plotPieces[x]);
    }
  });
  var plots = [].concat.apply([], options);
  return plots;
}

// gets name of parent element. use this for checkboxes for something
// function get_parent(elem) {
  // var x = elem.closest(".radio-option").attributes["name"].value;
  // console.log(x);    
// }

// enables specific checkboxes for selected radio buttons
function options() {    
  let options = Array.from(document.getElementsByClassName("radio-option"));
  options.forEach(elem => {
    const main = elem.querySelector("input[type=radio]");
    var subs = elem.querySelectorAll("input[type=checkbox]");        
    // console.log(subs); // returns nodeList of all checkboxes
    for (const checkbox of subs) { 
      if (main.checked && checkbox.disabled) {
        checkbox.disabled = false; // enables relevant checkboxes
      } else if (main.checked === false) {
        checkbox.disabled = true; // disables irrelevant checkboxes
        checkbox.checked = false; // unchecks those checkboxes
      }
      // console.log(subs); // returns nodeList of relevant checkboxes
    }    
  });
}

// unchecks all input buttons and disables all checkboxes
function reset() {
  let buttons = Array.from(document.getElementsByTagName("input"));
  buttons.forEach(elem => {
    var subs = elem.getAttribute("type");
    if (elem.checked) {
      elem.checked = false; // unchecks all buttons
    }
    if (subs == "checkbox" && elem.disabled === false) {
      elem.disabled = true; // disables all checkboxes
    }
  });
}

// changes the generator function call based on whichever button's clicked
function genSet(elem) {
  options(); // enables/disables checkboxes
  var story = elem.attributes["value"].value;
  const buttons = document.querySelectorAll("#plotSubmit, #plotCreate");
  buttons.forEach(elem => {
    elem.setAttribute("onclick", story);
  });
}

// resets control panel buttons and generator function call
function plotReset() {
  reset(); // resets the control panel
  const buttons = document.querySelectorAll("#plotSubmit, #plotCreate");
  buttons.forEach(elem => {
    elem.setAttribute("onclick", "plotCreate()");
  });
}

////////////////
//// OTHER
////////////////
function mobileNav() {
  var x = document.getElementById("navBar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}