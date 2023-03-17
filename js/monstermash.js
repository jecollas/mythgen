// do something here so that the generator will return the creature traits for whatever type of thing is selected
typeTraits = {
    "beast": "beasts are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare",
    "construct": "constructs are unable to stray from their creator's will and are immune to Corrupt, Enslave, Fear, and Sleep; State “No Effect”. Constructs cannot be healed by normal means. Constructs of the same type may spend 1 minute of uninterrupted roleplay to heal another construct: State “To Construct, Heal 10 Hit Points”",
    "divine": "elevated beings who hold vast and varied powers",
    "elemental": "elementals are immune to Disarm, Disease, Poison, Maim, Shatter and anything with the same Element Keyword; State “No Effect”. An Elemental may choose to call their element on any weapon strike",
    "fae": "each Fae has a special trait that grants them extended lives, a Mantle of Immortality. Each Fae has their own Mantle",
    "monstrous humanoid": "each Monstrous Humanoid is unique, possessing their own abilities",
    "plant": "plants can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”",
    "undead": "as unliving entities, Undead are immune to Disease, Poison, Sleep, Waylay, and Weakness; State “No Effect”. Undead are diverse in nature, and each has their own traits",
}

// STAT BLOCK DATA TEMPLATE
    // name: "",
    // type: "",
    // hp: ,
    // armor: "",
    // weapons: "",
    // traits: "",
    // abilities: "",
    // skills: "",
    // commonLoot: "",
    // specialLoot: "",
    // costume: "",
    // desc: ""

// Get name and type set up for humanoid and special before you go back and add in all the rest of the stat block information
const creatures = {
    beast: {
        cockatrice: {
            name: "cockatrice",
            type: "beast"
        },
        genericBeastSmall: {
            name: "generic beast (small)",
            type: "beast"
        },
        giantCaveSpider: {
            name: "giant cave spider",
            type: "beast"
        },
        giantInsect: {
            name: "giant insect",
            type: "beast"
        },
        tatzlewurm: {
            name: "tatzlewurm",
            type: "beast"
        }
    },
    construct: {
        amp: {
            name: "A. M. P.",
            type: "construct"
        },
        basicSentry: {
            name: "basic sentry",
            type: "construct"
        },
        counterCoreConstruct: {
            name: "counter core construct",
            type: "construct"
        },
        panoptes: {
            name: "panoptes",
            type: "construct"
        }
    },
    elemental: {
        incarnationAir: {
            name: "elemental incarnation (air)",
            type: "elemental"
        },
        incarnationArcane: {
            name: "elemental incarnation (arcane)",
            type: "elemental"
        },
        incarnationEarth: {
            name: "elemental incarnation (earth)",
            type: "elemental"
        },
        incarnationWater: {
            name: "elemental incarnation (water)",
            type: "elemental"
        },
        incarnationWood: {
            name: "elemental incarnation (wood)",
            type: "elemental"
        },
        sparkAir: {
            name: "elemental spark (air)",
            type: "elemental"
        },
        sparkArcane: {
            name: "elemental spark (arcane)",
            type: "elemental"
        },
        sparkEarth: {
            name: "elemental spark (earth)",
            type: "elemental"
        },
        sparkFire: {
            name: "elemental spark (fire)",
            type: "elemental"
        },
        sparkWater: {
            name: "elemental spark (water)",
            type: "elemental"
        },
        sparkWood: {
            name: "elemental spark (wood)",
            type: "elemental"
        },
        visageAir: {
            name: "elemental visage (air)",
            type: "elemental"
        },
        visageArcane: {
            name: "elemental visage (arcane)",
            type: "elemental"
        },
        visageFire: {
            name: "elemental visage (fire)",
            type: "elemental"
        },
        visageMind: {
            name: "elemental visage (mind)",
            type: "elemental"
        },
        visageWater: {
            name: "elemental visage (water)",
            type: "elemental"
        },
        visageWood: {
            name: "elemental visage (wood)",
            type: "elemental"
        }
    },
    fae: {
        hob: {
            name: "hob",
            type: "fae",
            hp: 5,
            armor: "Leather Only, As Worn",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: Hobs are only affected by an Execute with the “Arcane” keyword. After 1 minute in Bleed Out, Heal 1 Hit Point if not Executed";
            },
            abilities: "<b>Improved First Aid:</b> Continuously hold one of your hands over the target. “Pause your Bleed Out count” This skill will end if you use any other skills or take damage. After 30 seconds of role playing this skill continuously, you may call “Heal 1 Hit Point” on your target. Alternatively, you may spend 30 seconds of roleplay to cure a single maimed limb instead.",
            skills: "None",
            commonLoot: "Up to 1 Fae Skin",
            specialLoot: "None",
            costume: "Ear prosthetics, 2 inch band of solid blue make-up from temple to temple over the nose, costuming as appropriate",
            desc: "Hobs are one of many common races of Fae on Hyreath. Intelligent and bold, Hobs build small villages and communities, just like any other humanoid race of Hyreath. Hobs are the craftsmen and proprietors of their small Fae villages. Great admirers of the Humanoids of Hyreath, will emulate what they think they know based on books and stories."
        },
        lauma: {
            name: "lauma",
            type: "fae",
            hp: 10,
            armor: "None",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: Lauma can only be damaged by axes or damage skills used through axes, if struck by any other weapon, state “No Effect”. While in the Deep Woods only, you are immune to Death and Execute, states “No Effect”. When you reach 0 Hit Points, you will fall into Bleed Out for 1 minute and then stand back up with full Hit Points.";
            },
            abilities: "<ul><li><b>Tree Punch:</b> You have unlimited use of “Wood, Prone” through weapon or packet.</li> <li><b>Beast Form:</b> You can muster up your bestial powers. After 10 seconds of roleplay becoming more beast-like, you can Dispel Bind, Pin, Snare, Pacify, or Fear</li></ul>",
            skills: "<ul><li>1x “By Voice, to those within 20 feet, Through Wood, Snare”</li> <li>1x “By Voice, to those within 20 feet Through Air, Silence”</li> <li>1x “By Voice, to those within 20 feet Through Water, Damage 3”</li></ul>",
            commonLoot: "Up to 1 Fae Skin",
            specialLoot: "None",
            costume: "Pointed Ears, Lauma make-up",
            desc: "Lauma are forest fae who call storms and like the taste of men."
        },
        nutkinDrone: {
            name: "nutkin drone",
            type: "fae",
            hp: 5,
            armor: "Light Armor",
            weapons: "One-handed Weapon & Shield or x2 One-handed Weapon",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: Nutkin are immune to non-magical Execute; state “Resist”. After 1 minute of Bleed Out, Heal 1 Hit Point.";
            },
            abilities: "<b>Tougher to Crack:</b> Due to their hard, shell-like skin, Nutkin are immune to uncalled weapon strikes. State “Resist”. You cannot lose more than 1 Hit Point per attack.",
            skills: "<ul><li>1x Weapon “Damage 2”</li> <li>1x Weapon “Slow”</li> <li>1x Weapon “Weakness”</li></ul>",
            commonLoot: "Up to 2 Acorn Materials",
            specialLoot: "Up to 1 Fae Skin",
            costume: "Nutkin Helmet, Green “tribal” make-up, brown costuming",
            desc: "You are a low-level Fae creature, with infantile intelligence and no access to spoken language (if under the effects of Tongues, you would say things like “Food!” or “Pretty Flowers”). Nutkin Drones work to build up and maintain their nests and serve many laborer roles. Nutkin do not execute and will only loot flower/fruit/animal materials."
        },
        nutkinScout: {
            name: "nutkin scout",
            type: "fae",
            hp: 3,
            armor: "None",
            weapons: "1x One-handed Weapon",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: Nutkin are immune to non-magical Execute; state “Resist”. After 1 minute of Bleed Out, Heal 1 Hit Point.";
            },
            abilities: "<b>Tough to Crack:</b> Due to their hard, shell-like skin, Nutkin are immune to uncalled weapon strikes. State “Resist”",
            skills: "<ul><li>1x Weapon “Damage 2”</li> <li>1x Weapon “Slow”</li></ul>",
            commonLoot: "Up to 2 Acorn Materials",
            specialLoot: "Up to 1 Fae Skin",
            costume: "Nutkin Helmet, Red “tribal” make-up, brown costuming",
            desc: "You are a low-level Fae creature, with infantile intelligence and no access to spoken language (if under the effects of Tongues, you would say things like “Food!” or “Pretty Flowers”). Nutkin Scouts patrol the areas outside of nests, seeking materials, food, and anything that catches the eye. Only aggressive out of curiosity, Nutkin will beat down humanoids due to mistaken food, or having something they want. Nutkin do not execute and will only loot flower/fruit/animal materials."
        },
        spriggan: {
            name: "spriggan",
            type: "fae",
            hp: 10,
            armor: "As worn",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: Spriggins are immune to non-magical weapon strikes, state “No effect”. This immunity is lost while under the effect of “Taunt”. You are immune to Death and Execute at Night only, state No Effect.";
            },
            abilities: "<b>Regeneration:</b> Spriggans heal 5 Hit Points every minute. Spriggans automatically Cure Poison, Disease, or Weakness after 1 minute of being affected.",
            skills: "<ul><li>Unlimited Packet - “Through Water, Heal 1 Hit Point”</li> <li>x3 Packet - “Through Water, Bind [Arms/Legs]” - per recycle</li> <li>x3 Packet - “Through Water, I Pin your [Right/Left] Leg” - per recycle</li> <li>x3 Packet - “Through Water, Snare” - per recycle</li> <li>x3 Packet - “Through Water, I Maim your [Right/Left][Arm/Leg]” - per recycle</li> <li>x1 Packet - “Through Water, I Maim all your limbs” - per recycle</li></ul>",
            commonLoot: "Up to 1 Fae Skin",
            specialLoot: "None",
            costume: "Ear prosthetics, shiny make-up on face, at least one gem on forehead",
            desc: "Spriggans are water Fae that try to get unknowing humans to imbibe their liquids for personal gain."
        }
    },
    monstrous: {
        anunagama: {
            name: "anunagama",
            type: "monstrous humanoid",
        },
        anunagamaGourmand: {
            name: "anunagama gourmand",
            type: "monstrous humanoid"
        },
        hillGnoll: {
            name: "hill gnoll",
            type: "monstrous humanoid"
        },
        hillGnollCommander: {
            name: "hill gnoll commander",
            type: "monstrous humanoid"
        },
        siren: {
            name: "siren",
            type: "monstrous humanoid"
        },
        lepid: {
            name: "lepid",
            type: "monstrous humanoid"
        },
        riverTroll: {
            name: "river troll",
            type: "monstrous humanoid"
        },
        werewolf: {
            name: "werewolf",
            type: "monstrous humanoid"
        }
    },
    plant: {
        basicTruffle: {
            name: "basic truffle",
            type: "plant"
        },
        compostSprout:{
            name: "compost sprout",
            type: "plant"
        },
        fieldStalker: {
            name: "field stalker",
            type: "plant"
        },
        ghostwoodSprout: {
            name: "ghostwood sprout",
            type: "plant"
        },
        heartwoodSprout: {
            name: "heartwood sprout",
            type: "plant"
        },
        ironwoodSprout: {
            name: "ironwood sprout",
            type: "plant"
        },
        pitcherPriest: {
            name: "pitcher priest",
            type: "plant"
        },
        seedlingSprout: {
            name: "seedling sprout",
            type: "plant"
        },
        stonewoodSprout: {
            name: "stonewood sprout",
            type: "plant"
        }
    },
    undead: {
        animatedCorpse: {
            name: "animated corpse",
            type: "undead"
        },
        bogMummy: {
            name: "bog mummy",
            type: "undead"
        },
        corpseEater: {
            name: "corpse eater",
            type: "undead"
        },
        minorBanshee: {
            name: "minor banshee",
            type: "undead"
        },
        minorZombie: {
            name: "minor zombie",
            type: "undead"
        },
        mummyLifeDrinker: {
            name: "mummy (life drinker)",
            type: "undead"
        },
        skeletonLvl2: {
            name: "skeleton level 2",
            type: "undead"
        },
        skeletonLvl4: {
            name: "skeleton level 4",
            type: "undead"
        },
        skeletonLvl6: {
            name: "skeleton level 6",
            type: "undead"
        },
        weepingMonk: {
            name: "weeping monk",
            type: "undead"
        }
    }
}

const humanoid = {
    alchemist: {
        chemist: {
            name: "chemist",
            type: "alchemist"
        },
        grenadier: {
            name: "grenadier",
            type: "alchemist"
        },
        poisoner: {
            name: "poisoner",
            type: "alchemist"
        }
    },
    artificer: {
        spellBastion: {
            name: "spell bastion",
            type: "artificer"
        },
        spellSlinger: {
            name: "spell slinger",
            type: "artificer"
        },
        thaumaturge: {
            name: "thaumaturge",
            type: "artificer"
        }
    },
    bard: {
        agitator: {
            name: "agitator",
            type: "bard"
        },
        summoner: {
            name: "summoner",
            type: "bard"
        }
    },
    cleric: {
        elementalEater: {
            name: "elemental eater",
            type: "cleric"
        },
        fieldMedic: {
            name: "field medic",
            type: "cleric"
        },
        sanctifier: {
            name: "sanctifier",
            type: "cleric"
        },
        scalewalker: {
            name: "scalewalker",
            type: "cleric"
        },
        spiritWarden: {
            name: "spirit warden",
            type: "cleric"
        }
    },
    druid: {
        bearzerker: {
            name: "bearzerker",
            type: "druid"
        },
        bestower: {
            name: "bestower",
            type: "druid"
        },
        saboteur: {
            name: "saboteur",
            type: "druid"
        }
    },
    fighter: {
        brute: {
            name: "brute",
            type: "fighter"
        },
        dancer: {
            name: "dancer",
            type: "fighter"
        },
        geldKnight: {
            name: "geld knight",
            type: "fighter"
        },
        legionnaire: {
            name: "legionnaire",
            type: "fighter"
        },
        monk: {
            name: "monk",
            type: "fighter"
        },
        patientWarrior: {
            name: "patient warrior",
            type: "fighter"
        }
    },
    paladin: {
        martyr: {
            name: "martyr",
            type: "paladin"
        },
        radiantKnight: {
            name: "radiant knight",
            type: "paladin"
        },
        reanimator: {
            name: "reanimator",
            type: "paladin"
        },
        shieldBearer: {
            name: "shield-bearer",
            type: "paladin"
        }
    },
    ranger: {
        arcaneArcher: {
            name: "arcane archer",
            type: "ranger"
        },
        bountyHunter: {
            name: "bounty hunter",
            type: "ranger"
        },
        totemMaster: {
            name: "totem master",
            type: "ranger"
        },
        trapper: {
            name: "trapper",
            type: "ranger"
        }
    },
    rogue: {
        juggler: {
            name: "juggler",
            type: "rogue"
        },
        knave: {
            name: "knave",
            type: "rogue"
        },
        sniper: {
            name: "sniper",
            type: "rogue"
        },
        treasureHunter: {
            name: "treasure hunter",
            type: "rogue"
        }
    },
    runesmith: {
        runeblade: {
            name: "runeblade",
            type: "runesmith"
        },
        runicGuard: {
            name: "runic guard",
            type: "runesmith"
        },
        sunderer: {
            name: "sunderer",
            type: "runesmith"
        }
    },
    wizard: {
        arenaWizard: {
            name: "arena wizard",
            type: "wizard"
        },
        elementalEvoker: {
            name: "elemental evoker",
            type: "wizard"
        },
        mageHunter: {
            name: "mage hunter",
            type: "wizard"
        },
        sandman: {
            name: "sandman",
            type: "wizard"
        }
    }
}

const classicCreature = {
    beast: {
        crow: {
            name: "crow",
            type: "beast"
        },
        giantMagpie: {
            name: "giant magpie",
            type: "beast"
        },
        giantScorpion: {
            name: "giant scorpion",
            type: "beast"
        }
    },
    humanoid: {
        basicBrute: {
            name: "basic brute",
            type: "humanoid"
        },
        basicCleric: {
            name: "basic cleric",
            type: "humanoid"
        },
        basicCutthroat: {
            name: "basic cutthroat",
            type: "humanoid"
        },
        basicWizard: {
            name: "basic wizard",
            type: "humanoid"
        },
        mysticKnight: {
            name: "mystic knight",
            type: "humanoid"
        }
    }
}

const specialCreature = {
    construct: {
        harvestGolumn: {
            name: "harvest golumn",
            type: "construct"
        },
        maliceAir: {
            name: "malice of the archive: air",
            type: "construct"
        },
        maliceArcane: {
            name: "malice of the archive: arcane",
            type: "construct"
        },
        maliceEarth: {
            name: "malice of the archive: earth",
            type: "construct"
        },
        maliceFire: { 
            name: "malice of the archive: fire",
            type: "construct"
        },
        maliceWater: {
            name: "malice of the archive: water",
            type: "construct"
        },
        maliceWood: {
            name: "malice of the archive: wood",
            type: "construct"
        },
        nightmareMinion: {
            name: "nightmare minion",
            type: "construct"
        },
        strawSorcerer: {
            name: "straw sorcerer",
            type: "construct"
        },
        strawman: {
            name: "strawman",
            type: "construct"
        },
        strawmanTitan: { 
            name: "strawman titan",
            type: "construct"
        }
    },
    humanoid: {
        bestowBreaker: {
            name: "bestow breaker",
            type: "humanoid"
        },
        boneBreaker: {
            name: "bonebreaker",
            type: "humanoid"
        },
        gravedigger: {
            name: "gravedigger",
            type: "humanoid"
        },
        mime: {
            name: "mime",
            type: "humanoid"
        },
        scavenger: {
            name: "scavenger",
            type: "humanoid"
        }
    }
}

const plotSpecific = {
    divine: {
        soggyWitch: {
            name: "soggy witch",
            type: "divine"
        }
    },
    elemental: {
        chainBogun: {
            name: "chain bogun",
            type: "elemental"
        },
        blipAir: {
            name: "elemental blip (air)",
            type: "elemental"
        },
        blipArcane: {
            name: "elemental blip (arcane)",
            type: "elemental"
        },
        blipEarth: {
            name: "elemental blip (earth)",
            type: "elemental"
        },
        blipFire: {
            name: "elemental blip (fire)",
            type: "elemental"
        },
        blipWater: {
            name: "elemental blip (water)",
            type: "elemental"
        },
        blipWood: {
            name: "elemental blip (wood)",
            type: "elemental"
        },
        minionsPanic: {
            name: "minions of panic",
            type: "elemental"
        },
        trueFearPanic: {
            name: "true fear (panic)",
            type: "elemental"
        }
    },
    fae: { 
        halcyon: {
            name: "halcyon (lance)",
            type: "fae"
        },
        pixie: {
            name: "pixie",
            type: "fae"
        },
        tanis: {
            name: "tanis",
            type: "fae"
        },
        theLethen: {
            name: "the lethen",
            type: "fae"
        },
        toothFae: {
            name: "tooth fae",
            type: "fae"
        },
        tridrite: {
            name: "tridrite (amanda)",
            type: "fae"
        }
    },
    humanoid: {
        banrionAlewifeHaggan: {
            name: "banrion alewife haggan",
            type: "humanoid"
        },
        countAmadeo: {
            name: "count amadeo",
            type: "humanoid"
        },
        fioraBandyabout: {
            name: "fiora bandyabout",
            type: "humanoid"
        },
        gremold: {
            name: "gremold",
            type: "humanoid"
        },
        jarlBloodbeard: {
            name: "jarl bloodbeard",
            type: "humanoid"
        },
        ladyPines: {
            name: "lady of the pines",
            type: "humanoid"
        },
        loneWolf: {
            name: "lone wolf",
            type: "humanoid"
        },
        aemettBehrend: {
            name: "lord protector aemett behrend",
            type: "humanoid"
        },
        miasma: {
            name: "miasma - H H S",
            type: "humanoid"
        },
        mixMaster: {
            name: "mix master - H H S",
            type: "humanoid"
        },
        roarkGalt: {
            name: "roark galt",
            type: "humanoid"
        },
        sideWinder: {
            name: "sidewinder",
            type: "humanoid"
        },
        sirLucien: {
            name: "sir lucien of adara",
            type: "humanoid"
        },
        bogunLord: {
            name: "the bogun lord",
            type: "humanoid"
        },
        willowWitch: {
            name: "the willow witch",
            type: "humanoid"
        }
    },
    monstrous: {
        gretchAdult: {
            name: "gretch adult",
            type: "monstrous humanoid"
        },
        gretchElder: {
            name: "gretch elder",
            type: "monstrous humanoid"
        },
        gretchHatchling: {
            name: "gretch hatchling",
            type: "monstrous humanoid"
        },
        redScarfedGnoll: {
            name: "red scarfed gnoll",
            type: "monstrous humanoid"
        }
    },
    undead: {
        alexandersRevenant: {
            name: "alexander's revenant",
            type: "undead"
        },
        boneDaddy: {
            name: "bone daddy",
            type: "undead"
        },
        lordLadyDemarsk: {
            name: "lord & lady demarsk",
            type: "undead"
        }
    }
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function capitalLetter(str) {
    return str = str[0].toUpperCase() + str.substring(1);
}

function lowerLetter(str) {
    return str = str[0].toLowerCase() + str.substring(1);
}

function titleCase(str) {
    return str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function monsterCall(obj) {
    var classKeys = Object.keys(obj);
    var classType = randomString(classKeys);
    var cClass = obj[classType];
    var cKeys = Object.keys(cClass);
    var cType = randomString(cKeys);
    var cTrait = cClass[cType];
    return cTrait;
}

function monsterMash() {
    const keys = Object.keys(typeTraits);
    const type = randomString(keys);
    const traits = typeTraits[type];
    // console.log(traits);

    const creatureCall = monsterCall(creatures);
    const humanCall = monsterCall(humanoid);
    const classicCall = monsterCall(classicCreature);
    const specialCall = monsterCall(specialCreature);
    const specificCall = monsterCall(plotSpecific);

    // html bits i really don't want to have to keep typing
    const a = "<span><b>";
    const b = ':</b> <span id="';
    const c = '">';
    const d = "</span></span><br>"

    const e = "<p><b>";
    const f = "</p></p>"
    const g = ':</b><br> <span id="'

    const h = '<p style="margin-bottom: 0;"><b>';

    // Entire goddamn stat block
    // const creatureInfo = 
    //     "<p>" + a + "Monster Name" + b + "name" + c + cTrait.name + d + 
    //     a + "Creature Type" + b + "type" + c + cTrait.type + d + 
    //     a + "Hit Points" + b + "hp" + c + cTrait.hp + d + 
    //     a + "Armor" + b + "armor" + c + cTrait.armor + d +  
    //     a + "Weapons Used" + b + "weapons" + c + cTrait.weapons + d + "</p>" + "<hr>" + 
    
    //     h + cTrait.name + " Traits" + g + "traits" + c + cTrait.traits() + f + 
    //     h + "Special Abilities" + g + "abilities" + c + cTrait.abilities + f + 
    //     h + "Skills" + g + "skills" + c + cTrait.skills + f + 
    //     h + "Common Loot" + g + "commonLoot" + c + cTrait.commonLoot + f + 
    //     h + "Special Loot" + g + "specialLoot" + c + cTrait.specialLoot + f + "<hr>" + 

    //     e + "Costuming & Makeup-up Required" + g + "costume" + c + cTrait.costume + f + 
    //     e + "Description and Role-Play" + g + "desc" + c + cTrait.desc + f + "</p>";
    // ;

    // Monster Name and Type -- TURN THIS ON WHEN PUSHING CODE
    document.querySelector(".output").innerHTML = 
    "<p><b>Monster:</b> " + titleCase(creatureCall.name) + " — " + titleCase(creatureCall.type) + 
    "<br><b>Humanoid:</b> " + titleCase(humanCall.name) + " — " + titleCase(humanCall.type) + 
    "<br><b>Classic:</b> " + titleCase(classicCall.name) + " — " + titleCase(classicCall.type) + 
    // "<br><b>Special:</b> " + titleCase(specialCall.name) + " — " + titleCase(specialCall.type) + 
    // "<br><b>Plot Specific:</b> " + titleCase(specificCall.name) + " — " + titleCase(specificCall.type) + 
    "</p>" + 
    "<p><b>" + titleCase(type) + ".</b> " + capitalLetter(traits) + ".</p>";
    
    // Monster Stat Block -- DO NOT LEAVE THIS TURNED ON WHEN CODE IS PUSHED
    // document.querySelector(".output").innerHTML = creatureInfo;
}