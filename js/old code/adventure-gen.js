// {CONDITION} {GROUP} of {MEMBERS} {ACTION} {MEANS} {LOCATION} {GOAL} {MOTIVATION} {COMPLICATION}

const adventureElem = {
    condition: [
        "a paramilitary",
        "a military",
        "a search",
        "a suicidal",
        "a fleeing",
        "an organized",
        "an insatiable",
        "a sickened",
        "a lusty",
        "a drug-crazed",
        "a maniacal",
        "an unorganized",
        "a pugilistic",
        "a busybody",
        "an evil",
        "a sociopathic",
        "an underground",
        "a dying",
        "a benevolent",
        "an arsonistic",
        "a disorganized",
        "a convicted",
        "a noble",
        "a liar",
        "a chaotic",
        "a malicious",
        "a murderous",
        "a pugnacious",
        "a secret",
        "an elderly",
        "a violent",
        "an unharmonious",
        "a devious",
        "a young",
        "a surreptitious",
        "a quarelling",
        "an ideologically split",
        "a ragged",
        "a cursed",
        "a good",
        "an enlightened",
        "a zealous",
        "a heroic",
        "an amnesiac",
        "a resurrected",
        "a fey-touched",
        "an elite",
        "a lycanthropic",
        "an escaped",
        "an injured",
        "a commissioned",
        "an official",
        "a random",
        "a self-pitying",
        "a well-dressed",
        "a xenophobic",
        "a superstitious",
        "a drunk",
        "a depressive",
        "a morbid",
        "a mortally wounded",
        "a diseased",
        "a contrite",
        "a hateful",
        "an alcoholic",
        "a drug-addicted",
        "a fanatical",
        "a homeless",
        "a confused",
        "an artistic",
        "a desperate",
        "a suspicious",
        "an unaccountable",
        "an exhausted",
        "a vocal",
        "an undead",
        "a shady",
        "a righteous",
        "a plaintive",
        "a cowardly",
        "an insane",
        "an unscrupulous",
        "an oppressed",
        "a conned",
        "a fallen",
        "an undercover",
        "a reluctant",
        "an addicted",
        "a bloodthirsty",
        "an otherworldly",
        "a celestial",
        "an outsider",
        "an insectoid",
        "a brilliant",
        "a greedy",
        "a materialistic",
        "an unholy",
        "an ancient",
        "an obsessive",
        "an old",
        "a sole",
        "an outgrown",
        "an renown",
        "a rich",
        "a poor",
        "a reformed",
        "a secretive",
        "a paranoid",
        "a compulsive",
        "a perverse",
        "an iconoclastic",
        "a nihilistic",
        "a former",
        "a retired",
        "an underappreciated",
        "a kindly",
        "a unique"
    ], // added to const condition
    group: [
        "order",
        "horde",
        "clique",
        "gaggle",
        "mob",
        "collegium ",
        "armed group",
        "squad",
        "cadre",
        "trio",
        "duo",
        "quintet",
        "pack",
        "wandering troupe",
        "crime ring",
        "group",
        "cabal",
        "coven",
        "gang",
        "bunch",
        "fellowship",
        "posse",
        "school class",
        "syndicate",
        "delegation",
        "secret society",
        "guild",
        "extended family",
        "noble house",
        "platoon",
        "caravan",
        "sisterhood",
        "work team",
        "team",
        "association",
        "cartel",
        "club",
        "congregation",
        "individual",
        "gentlemen's club",
        "faction",
        "crew",
        "hidden society",
        "league",
        "converstation club",
        "religious sect",
        "tribe",
        "elite squad",
        "brotherhood",
        "charity organization",
        "support staff",
        "entourage",
        "assembly",
        "noble family",
        "governing body",
        "ensemble",
        "conclave",
        "coterie",
        "organization",
        "citizens",
        "circle",
        "partnership",
        "society",
        "party",
        "cult",
        "group",
        "troop",
        "army",
        "mass",
        "gathering",
        "political faction",
        "inbred family",
        "choir",
        "crowd",
        "splinter faction",
        "band",
        "conspiracy",
        "cult",
        "clan",
        "collegium",
        "patchwork",
        "network",
        "cell",
        "panel",
        "doomsday cult",
        "union",
        "collective"
    ], // added to const group
    members: [
        "squires",
        "adventurers",
        "assassins",
        "fish people",
        "drunken farmers",
        "illusionists",
        "settlers",
        "werewolves",
        "raiders",
        "industrialists",
        "acolytes",
        "vampires",
        "collectors",
        "animals",
        "land surveyors",
        "rogues",
        "elementals",
        "goblin hunters",
        "lowlives",
        "knights",
        "mercenaries",
        "bardic actors",
        "plants",
        "nobles and their retinue",
        "royalty",
        "lepers",
        "kobold trapsmiths",
        "wizards",
        "ancients",
        "bandits",
        "mendicant monks",
        "giants",
        "prisoners",
        "dwarven archaeologists",
        "con artists",
        "alchemists",
        "thieving travelers",
        "villians",
        "slaves",
        "diplomats",
        "doppelgangers",
        "temple monks",
        "rebels",
        "runaways",
        "psychics",
        "tinkers",
        "local spirits",
        "masterless golems",
        "druids",
        "kings",
        "diviners",
        "travelling merchants",
        "mysterious cloaked men",
        "liches",
        "sprites",
        "traitors",
        "monitors",
        "scholars",
        "guards",
        "ousted monarchs",
        "ghosts",
        "militia members",
        "children",
        "orphan children",
        "fairies",
        "holy inquisitors",
        "singers",
        "enchanters",
        "enchantresses",
        "merchants",
        "cavaliers",
        "religious zealots",
        "mummers",
        "bards",
        "orcs",
        "dragons",
        "otherwordly beings",
        "dukes",
        "duchesses",
        "undead",
        "slavers",
        "escaped slaves",
        "witches",
        "planar travelers",
        "charity mission workers",
        "chaos worshippers",
        "monks",
        "priests",
        "pesants",
        "common folk",
        "terrorists",
        "defectors",
        "pageboys",
        "spies",
        "foreign diplomats",
        "nuns",
        "nomads",
        "plant creatures",
        "philosophers",
        "sea creatures",
        "pirates",
        "barons",
        "ladies",
        "teenagers",
        "unemployed tradespeople",
        "peasants",
        "aristocrats",
        "royals",
        "scientists",
        "necromancers",
        "gnomes",
        "masons",
        "painter",
        "senior villagers",
        "housebreakers",
        "fishermen",
        "vintners",
        "leatherworkers",
        "intelligentsia",
        "craftspersons",
        "convicts",
        "felons",
        "smiths",
        "homunculi",
        "golems",
        "bodysnatchers",
        "vivisectionists",
        "ax murderers",
        "tulip growers",
        "fey creatures",
        "barbarians",
        "scribes",
        "crime bosses",
        "drug lords",
        "brothel keepers",
        "veterans",
        "draftees",
        "deserters",
        "masters",
        "journeymen",
        "home owners",
        "shopkeepers",
        "smugglers",
        "corrupt politicians",
        "mages",
        "hags",
        "violent vigilantes"
    ], // added to const members
    action: [
        "is declaring war on",
        "is recruiting new members",
        "is terrorizing travelers",
        "is investing suspiciously heavily",
        "is attempting to proselytize",
        "is duping officials",
        "is trying to pass a bribe",
        "is abusing power",
        "is attacking followers of another group",
        "is exploring the seas",
        "is taxing enourmous amount of gold",
        "is manipulating the king",
        "is spreading diseased blankets",
        "is trying to slow a plague's progression",
        "is making public speeches",
        "is organizing peasants",
        "is requesting a divine audience",
        "is in disguise",
        "is challenging people to a duel",
        "is causing chaos",
        "is raising the dead",
        "is sailing away",
        "is attempting to restore their lost honor",
        "is razing a city",
        "is building a fortress",
        "is conspiring with another group",
        "is trying to get aproval",
        "is on official business",
        "is looking for the chosen one",
        "is abusing the law",
        "is being framed for murder",
        "is sabotaging alliances",
        "is gleaning information",
        "is painting arcane murals",
        "is excavating an ancient song",
        "is building a fleet of warships",
        "is impeding travellers",
        "is performing sensitive divinations",
        "is on a pilgramage",
        "is keeping a low profile",
        "is building a settlement",
        "is controlling the militia",
        "is capturing citizens",
        "is looking for unstable individuals",
        "are sacrificing themselves",
        "is reconnaissancing for a weak spot",
        "is seeking a cure",
        "is preying on children",
        "is cheating the elderly",
        "is duping the aristocracy",
        "is robbing clerics",
        "is terrorizing mages",
        "is shirking duty",
        "is pretending interest",
        "is stirring rebellion",
        "is inciting violence",
        "is deflecting blame",
        "is questing for a magical formula",
        "is searching for an Archwizard's legendary lost spellbook",
        "is invoking privileges",
        "is propagating a new ethic",
        "is spreading a plague",
        "is selling false hope",
        "is writing a new powerful magic book",
        "is spreading rumors",
        "is waging a trade war",
        "is building up a trade monopoly",
        "is hindering trade",
        "is manipulating prices",
        "is securing resources",
        "is denying resources",
        "is resurrecting long extinct creatures",
        "is picketing honest shopkeepers",
        "is drowning kittens",
        "is creating creature hybrids",
        "is sabotaging a building site",
        "vandalizes a rival's masterwork",
        "is trying to trick younger citizens",
        "is claiming responsibility",
        "is taking the blame",
        "is stifling opposition",
        "is over-running resources",
        "is starving the masses",
        "is defiling shrines",
        "is 'culling the herd'",
        "plans to estalish an illegal gambling ring",
        "intents to kidnap children from their parents"
    ], // added to const action
    actionSingle: [ // separate this one out to the specifics like, [person/group of people], [location place], etc
        "dying",
        "killing",
        "bribing",
        "exploring",
        "summoning",
        "transporting",
        "stealing",
        "hunting",
        "torturing",
        "gathering",
        "cursing",
        "enchanting",
        "disabling",
        "creating",
        "attacking",
        "writing",
        "assassinating",
        "kidnapping",
        "sabotaging",
        "dishonoring",
        "marrying",
        "traveling",
        "sneaking",
        "unleashing",
        "escorting",
        "digging",
        "protecting",
        "blackmailing",
        "robbing",
        "napping",
        "disfiguring",
        "foraging",
        "impersonating",
        "hiding",
        "destroying",
        "searching",
        "seeking",
        "fleeing",
        "tricking",
        "manipulating",
        "resting",
        "blockading",
        "discovering",
        "invading",
        "embarrassing",
        "trying",
        "looking",
        "camping",
        "squatting"
    ], // did the thing
    means: [
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
        "by summoning a demon",
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
        "with demonic hekp",
        "with the local authority",
        "with the local cirme underground",
        "with market manipulations",
        "via cloning",
        "by the power of the Ooze",
        "by any means necessary",
        "with lurid colors",
        "with deceptive documents"
    ], // added to const means
    location: [
        "on the border",
        "atop a mesa of volcanic glass",
        "at the bottom of a maze",
        "at an ancient stone henge",
        "in a refugee camp",
        "at the crossroads at a new moon midnight",
        "beside an old church",
        "at the top of the waterfalls",
        "across the sea",
        "near a cursed village",
        "in a field",
        "inside the skull of a dead god",
        "in plain sight",
        "at the witches' coven",
        "at a fortress under siege",
        "in a cave",
        "because they've been cursed by a priest of an ancient one",
        "in a druid's grove",
        "near a magical spring",
        "on top of a mountain",
        "at the top or bottom of a waterfall",
        "because they are under a powerful geas spell from an evil wizard.",
        "at a bridge",
        "at the dragon's lair",
        "at the ruins of a village that was fine the last time you saw it",
        "at the kingdom treasury",
        "in infected swamps",
        "at an arena with an event in progress",
        "in a local cave that connects to underdark",
        "in the throne room",
        "in the library",
        "in a leper colony",
        "inside the volcano",
        "at the empire's capital",
        "in a local church",
        "at a mass grave",
        "at a four-day alcohol-fueled jousting competition",
        "at the bottom of the sea",
        "at the center of town",
        "at the shores before the world's end",
        "at a performance",
        "at the crack of dawn",
        "at the crypt of a wizard",
        "at the burial mounds of the ancient prison",
        "at a mage's tower",
        "at the castle in the sky",
        "at the edge of reality",
        "at a wizard's home",
        "in the sewers",
        "at the caves under the mountain",
        "at a hive for giant bees",
        "at a lonely lighthouse",
        "along the highway",
        "at the end of the world",
        "at the old war monument",
        "at a dimensional nexus",
        "at the top of a mountain",
        "at a god's home",
        "inside the inner chambers",
        "outside the palace walls",
        "at a VIP wedding ceremony",
        "by the King's road",
        "at the center under the darkest clouds",
        "at the gates to the divine path",
        "at the catacombs",
        "in the midst of a riot",
        "at the kingdom armory",
        "on a busy road",
        "beneath a bridge",
        "in a graveyard",
        "behind a waterfall",
        "between two dimensional vortexes",
        "at the center of a former battlefield",
        "at the eye of a stationary storm",
        "in a flying fortress",
        "outside the town",
        "at the forbidden section of a mage's library",
        "up a tree",
        "at the center of the dam",
        "in the castle courtyard",
        "at the center of an active battlefield",
        "during the festival",
        "in a town afflicted with the plague",
        "at a bizarre menagerie",
        "amongst a crowd",
        "at the royal family's tomb",
        "at the guildhall",
        "at the moment the seas part before them",
        "on a storm-damaged ship",
        "at the mysterious portal recently found",
        "at the feet of the sleeping titans",
        "at the noble's gathering",
        "at a grand celebration",
        "in the hull of a ship",
        "under the druid's grove",
        "in the tombs and catacombs of a large temple",
        "in the catacombs",
        "in the necropolis",
        "among the tombs of giants",
        "on the lowest level of The Mad Wizard's dungeon",
        "in the Tower of Light",
        "in the Far Ethereal Plane",
        "on an island in the Astral Sea",
        "in the Tower of Darkness",
        "in the barrow-downs",
        "at a menhir circle",
        "in the mountains",
        "in the deset",
        "in the plains",
        "at the river",
        "in the cathedral",
        "in a mine",
        "at the end of the rainbow",
        "in a glacial fortress",
        "in a flying castle",
        "on a swimming city",
        "in a canyon",
        "near a volcano",
        "in a month",
        "in three days",
        "in a secret facility",
        "in the city center",
        "in the museum",
        "at the town hall",
        "in the gaming rooms",
        "in the casinos",
        "at the card tables",
        "on the highways",
        "in the prison",
        "in the dungeons"
    ], // added to const location
    goal: [
        "to assume control",
        "to become immortal",
        "to become king",
        "to become martyrs",
        "to become rich",
        "to betray their country for personal gain",
        "to bind a demon",
        "to break the walls separating reality",
        "to bring back a lost one to live",
        "to bring domination to their race",
        "to bring peace",
        "to build a haven",
        "to burn everything",
        "to catch the notice of a god",
        "to change history",
        "to clear their names",
        "to conquer a nation",
        "to convert others to their way of thinking",
        "to create a legacy",
        "to create a new divinity",
        "to create a powerful magic item",
        "to cure their insanity",
        "to defeat a cleric",
        "to defeat an army",
        "to delay a wedding",
        "to destroy",
        "to destroy a divinity",
        "to destroy a rival",
        "to destroy a village",
        "to destroy magic",
        "to die",
        "to discover a villain's weakness",
        "to discover who they really are",
        "to earn fame and prestige",
        "to eliminate their rival",
        "to embarrass a local noble",
        "to end a rivalry",
        "to end a war",
        "to enslave their targets",
        "to erase their past",
        "to escape punishment",
        "to expand their domains",
        "to expose the court",
        "to extinguish a race",
        "to fight against a rival",
        "to finally rest",
        "to find the real answers",
        "to form a cult",
        "to form a new society",
        "to found a new community",
        "to free the princess",
        "to free their people",
        "to get revenge",
        "to heal a great wound upon the land/people",
        "to hide",
        "to hide their treasure",
        "to hold a coup",
        "to hunt a vampire",
        "to implode the court",
        "to join the court",
        "to keep their godess happy",
        "to kill a colony of humanoids",
        "to kill a king",
        "to locate a tome of unspeakable truths",
        "to make fun of",
        "to make substantial profits",
        "to negotiate a truce",
        "to negotiate an agreement with the arch enemy",
        "to open a magical gate",
        "to open a portal to another dimension",
        "to overthrow the empress",
        "to plan for the next season",
        "to prove their bravery",
        "to recruit followers",
        "to reset time",
        "to return the ancients",
        "to revive a forgotten god",
        "to save themselves",
        "to shame a knight",
        "to slaughter a group of people",
        "to start a civil war",
        "to start a new world order",
        "to start a war",
        "to stick it to 'the man'",
        "to summon a monster",
        "to turn back time",
        "to undo reality",
        "to unite the lands",
        "to unleash unspeakable evil",
        "to worship a forgotten divinity",
        "to turn people undead",
        "to ally themselves with a vampire lord",
        "to awake thousands of ghosts",
        "to find a werewolf lair",
        "to pay their debts",
        "to appease a demoness",
        "to avert unnatural disaster",
        "to avert disaster",
        "to topple the kingdom",
        "to earn respect",
        "to fulfill a prophecy",
        "to avert a prophecy's fulfillment",
        "to cheat destiny",
        "to save their children",
        "to free hostages",
        "to acquire hostages",
        "to invoke the Serpent God",
        "to banish a demon",
        "to restore their reputation",
        "to incite a riot",
        "to sow disorder",
        "to expose treachery",
        "to gain hostages",
        "to gain leverage",
        "to make a menagerie of creatures",
        "to complete their collections",
        "to shake the government",
        "to avert doomsday",
        "to show the inferiority of their successors",
        "to cause his rival disgrace",
        "to secure their place in history",
        "to crash the economy",
        "to corner the market",
        "to renegotiate an agreement",
        "to save the kingdom",
        "to save the animals",
        "to bring low the mighty",
        "to fulfill the prophecy"
    ], //added to const goal
    motivation: [
        "because they are poor",
        "because they want to gain respect",
        "because nobody else was doing it and it looked like it needed to be done",
        "because they want to commit mass murder of a nearby sttlement",
        "because they quest to fulfill a prophecy",
        "because they have been lied to",
        "because they think it would save the world",
        "because they are actually gods",
        "because they are bored",
        "because a vision told them so",
        "for greater good",
        "because they are demigods and want to ascend",
        "because their leader has recurring dreams about it",
        "because they have run out of native unstable individuals to capture",
        "because they serve an elder evil god",
        "because they are afraid of their master",
        "because they want to leave a legacy of suffering",
        "because they can't stand watching others be happy and at peace",
        "because they are double agents",
        "because of blackmail",
        "because they want to ruin the lands of an enemy",
        "because they want to become famous",
        "because they wish to escape to another world",
        "because they need a new home",
        "because if they don't they will be executed",
        "because they need a new food source",
        "because they are afflicted with a curse",
        "because they are sabateurs for a foreign power",
        "because they want to start a war",
        "because they were groomed for this since childhood",
        "to gain glory in the afterlife",
        "because they serve a demon lord",
        "because they wish to unleash the titans",
        "because of peer pressure",
        "to achieve communion with a spiritual manifestation outside of this world",
        "because they want to get rich",
        "because they conspire to overthrow the King",
        "because they want to control trade of a certain good",
        "because they want to cause a mass extinction event",
        "because they quest to recover a lost technology or form of magic",
        "because it's how they get joy",
        "because they are misguided",
        "because they want to activate nearby volacanoes",
        "because they seek to rule the world",
        "because they were wronged and want revenge",
        "because they are tired of being the ones to come in last",
        "because they are selfish and unable to comprehend other's suffering",
        "because they want to leave a lasting impression to the world",
        "because they want to make the world better for their progeny",
        "because they want to offer this world to older evils",
        "because they want to resurrect an ancient evil",
        "because they seek immortality",
        "because the prophecy demanded it",
        "because they are desperate",
        "because of the enemy, which no one can remember why they hate each other anymore",
        "because they are heartbroken their beloved leader was slain",
        "because they believe the only way to save a corrupt world is through corruption",
        "because they want to be remembered forever",
        "because they were lied to",
        "because they were offended",
        "because they want to become powerful",
        "because they want to free their people",
        "because they want to upset the status quo",
        "because they desire it above all else",
        "because they are rebels fighting an oppressive power",
        "because they serve a devil prince",
        "because their friends and family are at risk",
        "to fund their search for personal immortality",
        "because they are tired of the suffering",
        "for love",
        "to make their cause better known",
        "because they have been driven mad by nightmares",
        "because magic warped them to do evil",
        "because they want to find kidnapped royalty",
        "because they need to escape oppression",
        "they gave a promise to a dying mentor",
        "because they want to get revenge",
        "because they were ordered to",
        "because they are secretly part of 'the first'; the first group of humanoid to exist",
        "because they want to start an eternal fight",
        "because cruelty inflicted by others causes them to hate, hate, hate",
        "because they are getting paid",
        "because they want to harm their (innocent) enemy",
        "because they are cursed and doomed to die",
        "because of the failure of their previous plot to (roll motivation again)",
        "because they are dying of an unknown disease",
        "because they seek to boil off the oceans",
        "because they serve an evil master from another dimension",
        "because they want to destroy a god",
        "because they want to wipe out a race",
        "because it is their divine right",
        "because they are above the law",
        "because they are jilted",
        "because they are afraid",
        "because they misread a passage in a book",
        "because they want to avange their lost ones",
        "because they want to rectify a perceived insult",
        "because they seek redemption",
        "because they want to prevent a plague from spreading",
        "because their families are suffering",
        "because it's required for membership in the elite club",
        "because their leader hears voices",
        "because they lost a bet to a big bad guy",
        "because they have crushing debts",
        "because it will bring about the revolution",
        "because they feel responsible",
        "because they feel guilty",
        "because the world is corrupt",
        "because of sacred honor",
        "because of unfairness",
        "because it will restore balance",
        "because the abomination must be stopped",
        "because the world deserves it",
        "because the innocent have suffered enough",
        "because corruption must end",
        "because they fear the darkness ahead",
        "because rent is too damn high",
        "because a mage ordered it",
        "because the ends justify the means",
        "mostly because they can",
        "so as to soothe their guilty conscience",
        "because they are dissatisfied with current trends",
        "because he is jealous of success",
        "because they are afraid to be forgotten",
        "because they thought it was easy and needed the money",
        "because it would fulfill part of the prophecy",
        "because the process stated it must be done",
        "because they want to be different than the rest"
    ], //added to const motivation
    complication: [
        "they botched the formula",
        "they have been lied to",
        "their allies are only passively helping",
        "they do not know who to trust",
        "they have been poisoned",
        "one of them is a traitor",
        "their funder called in the debt",
        "they are betrayed by one of them",
        "one of them is captured",
        "one of them is arrested",
        "they got false information",
        "they have angered a divinity",
        "fear has gripped their hearts",
        "they are too reckless, taking wanton violence as the answer to anything that is not exclusively off limits",
        "a traitor is about to betray them",
        "a disease is wiping them out",
        "their plan is in shreds",
        "the odds are stacked against them",
        "they have lost their trump card",
        "they are cursed",
        "they are losing hope and are about to give up",
        "they are runnnig amok",
        "they have become unstable, and don't know it",
        "they just recently escaped being prisoners and do not have as many resources as they are used to",
        "they have been overly taxed and do not have as many resources as they are used to",
        "they have a spy in their midst",
        "they are also fighting another enemy on a separate front",
        "they fell into a trap",
        "they have lost the instructions",
        "their emotions will lead them astray",
        "they don't really want to do it",
        "their enemies are ahead of them",
        "the area is surrounded by enemy forces",
        "they don't seem to be the only group interested in this",
        "no one will believe them",
        "their leadership is incompetent",
        "time is running out",
        "an alarm has been triggered",
        "they don't know they are sleeper agents, about to activate",
        "they have not gathered all the necessary pieces",
        "they don't know they have already been compromised",
        "have based their plans on erroneous information",
        "a god opposes them",
        "they have been ambushed twice already",
        "they are underestimating their oppposition",
        "they have to face another, more powerful enemy after conquering the first",
        "they find out that their victory would cause harm to innocents",
        "must form an uneasy alliance with the enemy to be able to face a new adversary",
        "they are too cautious, taking twice as long to make a move than necessary",
        "they got squeamish",
        "they discover that their old mentor has turned against them - and for all the right reasons",
        "they lack an important resource",
        "they have caught a terrible disease",
        "they lost their map",
        "their numbers are dwindling",
        "they are all dying",
        "a destructive device has been hidden in the area",
        "they don't know that they are simply pawns in a bigger game",
        "they must wait until nighttime to act",
        "their retreat is cut off behind them",
        "they squabble",
        "they have lost their leader",
        "a new invention threatens their plans",
        "discover that by succeeding they would lose something important",
        "finally understand that their actions have harmed themselves",
        "they lost contact with their support network",
        "there is a supernatural presence at the site",
        "their alliances are beginning to falter",
        "ghosts have targeted them",
        "components are expensive",
        "their magic is failing",
        "it has become painful to walk in sunlight",
        "the seasons are changing",
        "it is unstable",
        "the villain will soon try to stop them",
        "they are a week early",
        "they aren't the only ones",
        "authorities are quickly approaching",
        "they have underestimated the difficulty involved",
        "they are running out of time",
        "they are not the only ones with the same goals",
        "a fire has broken out",
        "the flood waters are rising",
        "the key is lost",
        "they are losing support",
        "the most unexpected source has just brought them the missing component",
        "are offered a bribe for abandoning their plans",
        "a surprise visitor changes the situation",
        "they start to believe that they have lost some of their sanity",
        "understand that they no longer can trust their senses",
        "believe too soon that they have succeeded",
        "are flanked on all sides",
        "a natural disaster is coming",
        "an enemy horde is rushing in",
        "the public opinion is against them",
        "the stars aren't right yet",
        "they follow a false prophecy",
        "one of their own died too early",
        "they haven't found the right sacrifice",
        "they are still searching for the right place",
        "a natural disaster occurs",
        "rivals beat them to it",
        "the creatures escape",
        "they are foiled by their own pride",
        "everyone likes the new state of affairs better",
        "someone is suspiscious of the head elder"
    ] //added to const twist
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

    document.getElementById("ag-adventure").innerHTML = "In this story, <b>" + condition + " " + group + "</b> of <b>" + members + " " + action + " " + location  + ".</b> Their goal is <b>" + goal + " " + means + " " + motivation + ".</b> What they don't know is that <b>" + complication + ".</b>";
}