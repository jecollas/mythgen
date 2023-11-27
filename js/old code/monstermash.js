// do something here so that the generator will return the creature traits for whatever type of thing is selected
const typeTraits = {
    "beast": "beasts are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare",
    "construct": "constructs are unable to stray from their creator's will and are immune to Corrupt, Enslave, Fear, and Sleep; State “No Effect”. Constructs cannot be healed by normal means. Constructs of the same type may spend 1 minute of uninterrupted roleplay to heal another construct: State “To Construct, Heal 10 Hit Points”",
    "divine": "elevated beings who hold vast and varied powers",
    "elemental": "elementals are immune to Disarm, Disease, Poison, Maim, Shatter and anything with the same Element Keyword; State “No Effect”. An Elemental may choose to call their element on any weapon strike",
    "fae": "each Fae has a special trait that grants them extended lives, a Mantle of Immortality. Each Fae has their own Mantle",
    "monstrous humanoid": "each Monstrous Humanoid is unique, possessing their own abilities",
    "plant": "plants can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”",
    "undead": "as unliving entities, Undead are immune to Disease, Poison, Sleep, Waylay, and Weakness; State “No Effect”. Undead are diverse in nature, and each has their own traits",
}

// TEMPLATE
                // name: "",
                // tier: "",
                // element: "",
                // property: "",
                // rarity: "",
                // location: "",
                // refined: "",
                // look: ""

// STAT BLOCK DATA TEMPLATE
            // name: "",
            // type: "",
            // hp: ,
            // armor: "",
            // weapons: "",
            // traits: function() {
            //     return "<b>" + this.type + ":</b> " + this.name + ""
            // },
            // abilities: "",
            // skills: "",
            // commonLoot: "",
            // specialLoot: "",
            // costume: "",
            // desc: ""

// CREATURE TYPES PROGRESS - humanoids require different structure
// TODO: construct, elemental, humanoid, monstrous, undead
// IN PROGRESS: 
// DONE: beasts, divine, fae, plant

// TODO: construct (4), elemental (17), monstrous (8), undead (10)
const creatures = {
    beast: { // DONE
        cockatrice: {
            name: "Cockatrice",
            type: "Beast",
            hp: 40,
            armor: "10 (Natural Armor, you may not wear armor)",
            weapons: "Cockatrice Claws (Cannot be Disarmed)",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "Limb Regeneration: After 1 minute of being maimed, “Cure Maim” on the affected limb.",
            skills: "<ul><li>5x Weapon - “Poison (5 minutes)” — per run</li> <li>5x Weapon - “Paralyze (5 minutes)” — per run</li> <li>5x Weapon - “Maim” — per run</li></ul>",
            commonLoot: "Up to 2 Feathers",
            specialLoot: "Up to 1 Owlbear Feather",
            costume: "Cockatrice Costume",
            desc: "You're a hungry hunter bird that tends to attack packs of smaller animals. You are aggressive on sight. It is both lizard-like and bird-lie, so act accordingly."
        },
        genericBeastLarge: {
            name: "Generic Beast (Large)",
            type: "Beast",
            hp: 5,
            armor: "None",
            weapons: "2 One-handed Weapons",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + " are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "N/A",
            skills: "Choose up to 5, can take more than once:<ul><li>x1 Weapon - “Disarm” — per recycle</li> <li>x1 Weapon - “Disengage” — per recycle</li> <li>x1 Weapon - “Damage 2” — per recycle</li> <li>x1 Weapon - “Maim” — per recycle</li> <li>x1 Weapon - “Fear, 1 minute” — per recycle</li></ul>",
            commonLoot: "Up to 3 Hide/Animal Parts",
            specialLoot: "None",
            costume: "As appropriate to the animal",
            desc: "You are a common woodland creature of larger stature (wolf, bear, boar, horse, deer, lion, etc.)"
        },
        genericBeastSmall: {
            name: "Generic Beast (Small)",
            type: "Beast",
            hp: 2,
            armor: "None",
            weapons: "2 One-handed Weapons",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + " are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "N/A",
            skills: "Choose up to 3, can take more than once: <ul> <li>x1 Weapon - “Disarm” — per recycle</li> <li>x1 Weapon - “Disengage” — per recycle</li> <li>x1 Weapon - “Crit Damage 1” — per recycle</li></ul>",
            commonLoot: "Up to 2 Animal Parts",
            specialLoot: "None",
            costume: "As appropriate to the animal",
            desc: "You are a common woodland creature of smaller stature (fox, rat, rabbit, weasel, raven, etc.)"
        },
        giantCaveSpider: {
            name: "Giant Cave Spider",
            type: "Beast",
            hp: 4,
            armor: "6 (Natural Armor, you may not wear armor)",
            weapons: "2 One-handed Weapons",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "N/A",
            skills: "<ul><li>2x Weapon - “Snare” — per recycle</li> <li>2x Weapon - “Fear” — per recycle</li> <li>2x Weapon - “Damage 2” — per recycle</li> <li>1x Weapon - Parry — per recycle</li> <li>1x Weapon - “Poison, 30 minutes” — per encounter</li></ul>",
            commonLoot: "Up to 2 of any spider type",
            specialLoot: "None",
            costume: "Big Black Spider Costume, Black clothes, mask or make-up",
            desc: "You are a giant cave spider. You make large nests inside caves and mines, feeding off of anything unlucky enough to be caught in your web."
        },
        giantInsect: {
            name: "Giant Insect",
            type: "Beast",
            hp: 20,
            armor: "10 (Natural Armor, you may not wear armor)",
            weapons: "2 One-handed Swords (claws)",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "Hard Carapace: You cannot take any more than 3 damage from a single skill. A “Shatter” will remove this effect until your next recycle.",
            skills: "<ul><li>5x Weapon - “Crit, Prone”</li> <li>2x Weapon - “Maim”</li></ul>",
            commonLoot: "Up to 2 of any Novice insect",
            specialLoot: "None",
            costume: "Big Black Insect Outfit, Weevil Mask",
            desc: "You are a giant insect, you do not speak and are only as intelligent as a bug."
        },
        tatzlewurm: {
            name: "Tatzlewurm",
            type: "Beast",
            hp: 15,
            armor: "5 (Natural Armor, you may not wear armor)",
            weapons: "1 One-handed Sword",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "<ul><li>Poison Immunity: State “No Effect” to the Poison keyword.</li> <li>Putrid Insides: Immediately upon hitting the Dead state, state, “By Voice, those within 10 feet, Poison, 1 minute”.</li></ul>",
            skills: "<ul><li>1x Packet Burst - “Poison” — per Recycle (This skill must be the first attack each recycle)</li> <li>2x Weapon - “Maim” — per Recycle</li></ul>",
            commonLoot: "Up to 2 Scale",
            specialLoot: "None",
            costume: "Tatzlewurm Mask, Serpentine Skin Make-up, Green costuming (snake like)",
            desc: "Tatzlewurm are deadly reptiles that typically dwell in the cliffy mountains. When food is scarce or their home is lost, they will often come down into the valleys and forests for meals and shelter. Tatzlewurms hunt with their poison spray, taking their meal once their prey has succumbed. They open all hunts and combat with the deadly spit."
        }
    },
    construct: {
        amp: {
            name: "A. M. P",
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
    fae: { // DONE
        hob: {
            name: "Hob",
            type: "Fae",
            hp: 5,
            armor: "Leather Only, As Worn",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "s are only affected by an Execute with the “Arcane” keyword. After 1 minute in Bleed Out, Heal 1 Hit Point if not Executed";
            },
            abilities: "Improved First Aid: Continuously hold one of your hands over the target. “Pause your Bleed Out count” This skill will end if you use any other skills or take damage. After 30 seconds of role playing this skill continuously, you may call “Heal 1 Hit Point” on your target. Alternatively, you may spend 30 seconds of roleplay to cure a single maimed limb instead.",
            skills: "N/A",
            commonLoot: "Up to 1 Fae Skin",
            specialLoot: "None",
            costume: "Ear prosthetics, 2 inch band of solid blue make-up from temple to temple over the nose, costuming as appropriate",
            desc: "Hobs are one of many common races of Fae on Hyreath. Intelligent and bold, Hobs build small villages and communities, just like any other humanoid race of Hyreath. Hobs are the craftsmen and proprietors of their small Fae villages. Great admirers of the Humanoids of Hyreath, will emulate what they think they know based on books and stories."
        },
        lauma: {
            name: "Lauma",
            type: "Fae",
            hp: 10,
            armor: "None",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + " can only be damaged by axes or damage skills used through axes, if struck by any other weapon, state “No Effect”. While in the Deep Woods only, you are immune to Death and Execute, states “No Effect”. When you reach 0 Hit Points, you will fall into Bleed Out for 1 minute and then stand back up with full Hit Points.";
            },
            abilities: "<ul><li>Tree Punch: You have unlimited use of “Wood, Prone” through weapon or packet.</li> <li>Beast Form: You can muster up your bestial powers. After 10 seconds of roleplay becoming more beast-like, you can Dispel Bind, Pin, Snare, Pacify, or Fear</li></ul>",
            skills: "<ul><li>1x “By Voice, to those within 20 feet, Through Wood, Snare”</li> <li>1x “By Voice, to those within 20 feet Through Air, Silence”</li> <li>1x “By Voice, to those within 20 feet Through Water, Damage 3”</li></ul>",
            commonLoot: "Up to 1 Fae Skin",
            specialLoot: "None",
            costume: "Pointed Ears, Lauma make-up",
            desc: "Lauma are forest fae who call storms and like the taste of men."
        },
        nutkinDrone: {
            name: "Nutkin Drone",
            type: "Fae",
            hp: 5,
            armor: "Light Armor",
            weapons: "1 One-handed Weapon & Shield, or 2 One-handed Weapons",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "s are immune to non-magical Execute; state “Resist”. After 1 minute of Bleed Out, Heal 1 Hit Point.";
            },
            abilities: "Tougher to Crack: Due to their hard, shell-like skin, Nutkin are immune to uncalled weapon strikes. State “Resist”. You cannot lose more than 1 Hit Point per attack.",
            skills: "<ul><li>1x Weapon - “Damage 2”</li> <li>1x Weapon - “Slow”</li> <li>1x Weapon - “Weakness”</li></ul>",
            commonLoot: "Up to 2 Acorn Materials",
            specialLoot: "Up to 1 Fae Skin",
            costume: "Nutkin Helmet, Green “tribal” make-up, brown costuming",
            desc: "You are a low-level Fae creature, with infantile intelligence and no access to spoken language (if under the effects of Tongues, you would say things like “Food!” or “Pretty Flowers”). Nutkin Drones work to build up and maintain their nests and serve many laborer roles. Nutkin do not execute and will only loot flower/fruit/animal materials."
        },
        nutkinScout: {
            name: "Nutkin Scout",
            type: "Fae",
            hp: 3,
            armor: "None",
            weapons: "1 One-handed Weapon",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "s are immune to non-magical Execute; state “Resist”. After 1 minute of Bleed Out, Heal 1 Hit Point.";
            },
            abilities: "Tough to Crack: Due to their hard, shell-like skin, Nutkin are immune to uncalled weapon strikes. State “Resist”",
            skills: "<ul><li>1x Weapon - “Damage 2”</li> <li>1x Weapon - “Slow”</li></ul>",
            commonLoot: "Up to 2 Acorn Materials",
            specialLoot: "Up to 1 Fae Skin",
            costume: "Nutkin Helmet, Red “tribal” make-up, brown costuming",
            desc: "You are a low-level Fae creature, with infantile intelligence and no access to spoken language (if under the effects of Tongues, you would say things like “Food!” or “Pretty Flowers”). Nutkin Scouts patrol the areas outside of nests, seeking materials, food, and anything that catches the eye. Only aggressive out of curiosity, Nutkin will beat down humanoids due to mistaken food, or having something they want. Nutkin do not execute and will only loot flower/fruit/animal materials."
        },
        spriggan: {
            name: "Spriggan",
            type: "Fae",
            hp: 10,
            armor: "As Worn",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "s are immune to non-magical weapon strikes, state “No effect”. This immunity is lost while under the effect of “Taunt”. You are immune to Death and Execute at Night only, state No Effect.";
            },
            abilities: "Regeneration: Spriggans heal 5 Hit Points every minute. Spriggans automatically Cure Poison, Disease, or Weakness after 1 minute of being affected.",
            skills: "<ul><li>Unlimited Packet - “Through Water, Heal 1 Hit Point”</li> <li>x3 Packet - “Through Water, Bind [Arms/Legs]” — per recycle</li> <li>x3 Packet - “Through Water, I Pin your [Right/Left] Leg” — per recycle</li> <li>x3 Packet - “Through Water, Snare” — per recycle</li> <li>x3 Packet - “Through Water, I Maim your [Right/Left][Arm/Leg]” — per recycle</li> <li>x1 Packet - “Through Water, I Maim all your limbs” — per recycle</li></ul>",
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
    plant: { // DONE
        basicTruffle: {
            name: "Truffle",
            type: "Plant",
            hp: 10,
            armor: "None",
            weapons: "2 One-handed melee (Hammers when possible)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Poison Coated: When searched, state “Recoil, Poison”.",
            skills: "<ul><li>x3 Weapon - “Maim” — per recycle</li> <li>x2 Weapon - “Damage 3” — per recycle</li> <li>x3 Weapon - “Through Air, Poison” — per run</li></ul>",
            commonLoot: "<ul><li>Up to 2 Detritus Button OR</li> <li>1 Mosseater Nob</li></ul>",
            specialLoot: "None",
            costume: "Tan/brown mushroom hat, all tan or all brown clothing, tan or brown scarf covering mouth",
            desc: "<ul><li><i>Personality:</i> Curious and benevolent</li> <li><i>Speech:</i> Broken English. Extraordinarily incorrect grammar. Ideally, players should have to try to decipher what you are saying despite speaking English</li></ul>"
        },
        compostSprout:{
            name: "Compost Sprout",
            type: "Plant",
            hp: 3,
            armor: "5 (Natural Armor, you may not wear armor)",
            weapons: "1 One-handed Weapon, Staff (Preferably Wood)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "<ul><li>Constant Decay: Lose 1 Hit Point every 5 minutes.</li><li>Mulch: You may use Diagnose to ask “Are you Dead/in the Dead State?”. If yes, you may cast Weapon - “Through Earth, I end your Death Count. Go directly to Dedrot's Barrister.” If you do, you are restored to full Hit Points.</li></ul>",
            skills: "<ul><li>x5 “Recoil, Damage 1” on melee strikes — per recycle</li> <li>x1 Weapon - “Wood, Death” (Use sparingly) — per recycle</li></ul>",
            commonLoot: "Up to 1 Rank 1 Animal Part",
            specialLoot: "None",
            costume: "Costuming is Plant suits if available, green and/or brown costuming otherwise. Skeleton Mask, vines",
            desc: "You are a sprout born of the nutrients of compost. You constantly seek death to keep you fed. You cannot speak but can make ShShShSh noises. You have an innate aversion to fire and will target those who wield it."
        },
        fieldStalker: {
            name: "Field Stalker",
            type: "Plant",
            hp: 3,
            armor: "2 (Natural Armor, you may not wear armor)",
            weapons: "Choose: [One-handed Sword & Dagger] or [Dagger & Thrown Weapon]",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Children of the Corn: While fighting the same opponent with at least 1 other Field Stalker, you may deliver “To Back” skills from any direction.",
            skills: "<ul><li>2x Weapon - “Damage 2” — per recycle</li> <li>2x Weapon - “To Back, Crit, Damage 2” — per recycle</li> <li>1x Weapon - “To Back, Silence” — per recycle</li> <li>1x Weapon - “To Back, Waylay” — per recycle</li> <li>1x “Resist Maim” — per recycle</li></ul>",
            commonLoot: "Up to 2 Produce",
            specialLoot: "Up to 1 Rank 1 Fruit/Flower",
            costume: "Costuming is something with a hood that is worn (greens, browns, or black preferably). Corn Mask.",
            desc: "Field Stalkers are sentient Plants. You hunt in small packs, mainly utilizing ambushes, typically only seen at night. You have low level, animalistic intelligence. You cannot speak but can make gurgling noises."
        },
        ghostwoodSprout: {
            name: "Ghostwood Sprout",
            type: "Plant",
            hp: 5,
            armor: "10 (Natural Armor, you may not wear armor)",
            weapons: "Any, No Shields",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Ghostwood Bark: You only take damage from magical attacks or spells. State “No Effect””Recoil, Pacify” when struck by non-magical attacks or skills.",
            skills: "<ul><li>5x Weapon - “Damage 3” — per recycle</li> <li>3x Weapon - From Behind “Crit, Damage 5” — per recycle</li> <li>2x Weapon - “Shatter” — per recycle</li></ul>",
            commonLoot: "Up to 2 Raw Ghostwood",
            specialLoot: "Up to 1 Rank 3 Fruit/Flower",
            costume: "Ghostwood costume (“Leafman costume”)",
            desc: "You are a sentient Ghostwood Tree. Other creatures are seen as competition for resources. You have infantile, animal intelligence (curious and cautious, willing to fight). You cannot speak but can make ShShShSh noises. You have an innate aversion to fire and will target those who wield it."
        },
        heartwoodSprout: {
            name: "Heartwood Sprout",
            type: "Plant",
            hp: 4,
            armor: "35 (Natural Armor, you may not wear armor)",
            weapons: "None",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "<ul><li>Spore Spreader: You may only use your skills while under the effects of Snare. You may only use one skill every 5 seconds. Casually throw the Packet Burst over a group or straight above if surrounded. You must let out a loud sigh of melancholia every time you use a skill. (Note:Please use the hand on head method to pick up spell packets between recycles and after the fight)</li> <li>Overgrowth: Each time you hit 0 Hit Points, state “By voice, to those within 10 feet, Snare”</li></ul>",
            skills: "<ul><li>Unlimited Packet Burst “Sleep”</li> <li>Unlimited Packet Burst “Silence”</li> <li>Unlimited Packet Burst “Weakness”</li> <li>Unlimited Packet Burst “Slow”</li></ul>",
            commonLoot: "Up to 3 Heartwood",
            specialLoot: "Up to 1 Rank 3 Flower/Fruit",
            costume: "Costuming is Plant suits if available, green and/or brown costuming otherwise. Green makeup on exposed skin. Blooming Flowers on you: Flower Crown, Flower Make-up, etc.",
            desc: "You are a beautiful, budding version of a sprout. You are sultry and lackadaisical, like a Southern Bell. You are the prettiest sprout and it brings you great agony."
        },
        ironwoodSprout: {
            name: "Ironwood Sprout",
            type: "Plant",
            hp: 2,
            armor: "5 (Natural Armor, you may not wear armor)",
            weapons: "1 One-handed Weapon, Staff (Preferably Wood)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Weak Branch: The Ironwood Sprout wears a white and pink flower as part of its costuming. The cast person will choose a hit location to visibly place the flower. The Ironwood Sprout can only receive damage and effects that strike this hit area. All hits to this area are considered a Torso Shot for the purposes of a final strike. You may move the location of the flower with each recycle.",
            skills: "<ul><li>1x Weapon - “Damage 2” — per recycle</li> <li>2x Weapon or Packet - “Crit, Damage 1” — per recycle</li> <li>2x Packet - “Through Wood, Snare, 1 minute” — per recycle</li> <li>1x Weapon or Packet - “Taunt” — per recycle</li></ul>",
            commonLoot: "Up to 2 Raw ironwood",
            specialLoot: "Up to 1 Rank 2 Fruit/Flower",
            costume: "Costuming is Plant suits if available, green and/or brown costuming otherwise. Green makeup on exposed skin. Floral Crown, leaves only. White and Pink Ironwood Sprout Flower",
            desc: "You are a sentient plant. Other creatures are seen as competition for resources. You have infantile, animal intelligence (curious and cautious, willing to fight). You cannot speak but can make ShShShSh noises. You have an innate aversion to fire and will target those who wield it."
        },
        pitcherPriest: {
            name: "Pitcher Priest",
            type: "Plant",
            hp: 10,
            armor: "None",
            weapons: "2 One-handed Swords or double-fist packet",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Vampire Plant: Whenever you deal damage with a called weapon strike, heal that many Hit Points.",
            skills: "<ul><li>5x Weapon/Packet - “Damage 2” — per recycle</li> <li>2x Weapon/Packet - “Damage 3” — per recycle</li> <li>1x Weapon/Packet - “Damage 5” — per recycle</li> <li>1x Weapon/Packet - “Taunt, 1 minute” — per recycle</li></ul>",
            commonLoot: "Up to 1 Rank 2 or 3 Flowers/Bugs",
            specialLoot: "N/A",
            costume: "Nature Cleric stuff",
            desc: "You are a blessed of Enoon, some say you used to be human. You lure humans in with your beauty and grace and have them for a meal. Fond of games and bargains. You very much certainly and definitely are a human being that drinks water and eats…stuff. Awkward."
        },
        seedlingSprout: {
            name: "Seedling Sprout",
            type: "Plant",
            hp: 2,
            armor: "2 (Natural Armor, you may not wear armor)",
            weapons: "1 One-handed Weapon, Staff (Preferably Wood)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "None",
            skills: "<ul><li>1x Weapon - “Damage 2” — per recycle</li> <li>2x Weapon or Packet - “Crit, Damage 1” — per recycle</li> <li>2x Packet - “Through Wood, Snare, 1 minute” — per recycle</li></ul>",
            commonLoot: "Up to 1 Rank 1 Common Flower",
            specialLoot: "None",
            costume: "Costuming is Plant suits if available, green and/or brown costuming otherwise. Green makeup on exposed skin. Floral Crown, leaves only, no flowers.",
            desc: "You are a newly sprouted sentient plant. Other creatures are seen as competition for resources. You have infantile, animal intelligence (curious and cautious, willing to fight). You cannot speak but can make ShShShSh noises. You have an innate aversion to fire and will target those who wield it."
        },
        stonewoodSprout: {
            name: "Stonewood Sprout",
            type: "Plant",
            hp: 3,
            armor: "12 (Natural Armor, you may not wear armor)",
            weapons: "1 One-handed Weapon, Staff (Preferably Wood)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”."
            },
            abilities: "Spell Immunity: You are immune to magic. You are immune to the “Through” keyword, state: “No Effect”",
            skills: "<ul><li>10x Weapon - “Maim” — per recycle</li> <li>3x Weapon - “Shatter” — per recycle</li></ul>",
            commonLoot: "Up to 3 Raw Stonewood",
            specialLoot: "Up to 1 Rank 2 Fruit/Flower",
            costume: "Costuming is Plant suits if available, green and/or brown costuming otherwise. Gray Sponge Stone Makeup on exposed skin.",
            desc: "You are a sentient plant. Other creatures are seen as competition for resources. You have infantile, animal intelligence (curious and cautious, willing to fight). You cannot speak but can make ShShShSh noises. You have an innate aversion to fire and will target those who wield it."
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

// TODO: alchemist (3), artificer (3), bard (2), cleric (5), druid (3), fighter (6), paladin (4), ranger (4), rogue (4), runesmith (3), wizard (4)
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

// TODO: humanoid (5)
const classicCreature = {
    beast: { // DONE
        crow: {
            name: "Crow",
            type: "Beast",
            hp: 3,
            armor: "None",
            weapons: "2 One-handed Swords (claws)",
            traits: function () {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "Avian Mimicry: You may immediately copy any skill you hear.  If it is a spell, you must state the entire incant correctly, and you may swing the spell through your weapon.",
            skills: "<ul><li>x1 Rapid Search</li></ul>",
            commonLoot: "Coin",
            specialLoot: "Feather — Novice Skinner",
            costume: "Crow mask, all black",
            desc: "You are an actual crow, act like it."
        },
        giantMagpie: {
            name: "Giant Magpie",
            type: "Beast",
            hp: 4,
            armor: "None",
            weapons: "2 One-handed Swords (talons)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "<ul><li>Play Dead: Once per recycle a Giant Magpie may fall down as if dead, but keep your current Hit Points. If Diagnosed, you state that you are Dead. You may end this at any time. If during this time you are Executed, you must state “Resist” and you must stand up at full Hit Points.</li> <li>Avian Mimicry: You may immediately copy any skill you hear.  If it is a spell, you must state the entire incant correctly, and you may swing the spell through your weapon.</li></ul>",
            skills: "<ul><li>2x Weapon - “Disarm” — per recycle</li> <li>2x Weapon - “Disengage” — per recycle</li></ul>",
            commonLoot: "<ul><li>Copper</li> <li>Common Lesser Gems</li></ul>",
            specialLoot: "Up to 2 Feathers — Novice Skinner",
            costume: "Giant Magpie Costume",
            desc: "You are the tricksters of the bird world. You will mimic and laugh, steal shiny objects, and cause general mischief. You tend to only be interested in yourself and your flock."
        },
        giantScorpion: {
            name: "Giant Scorpion",
            type: "Beast",
            hp: 5,
            armor: "5 (Natural Armor, you may not wear armor)",
            weapons: "2 One-handed Swords (claws)",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "s are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare."
            },
            abilities: "Hard Carapace: You cannot take any more than 3 damage from a single skill. A “Shatter” will remove this effect until your next recycle.",
            skills: "<ul><li>3x Weapon (Tail Attack) - “Poison, 30 minutes” — per recycle</li> <li>3x Weapon - “Damage 2” — per recycle</li> <li>1x “Resist” Weapon-delivered Skill</li></ul>",
            commonLoot: "None",
            specialLoot: "Bone — Novice Skinner",
            costume: "Giant Scorpion Costume",
            desc: "You are a Giant Scorpion, incapable of speech or any sort of humanoid actions. You fight both for food and for defense."
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

// TODO: construct (11), humanoid (5)
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

// TODO: elemental (9), humanoid (15), monstrous (4), undead (3)
const plotSpecific = {
    divine: { // DONE
        soggyWitch: {
            name: "Soggy Witch",
            type: "Divine",
            hp: 6,
            armor: "None",
            weapons: "1 One-Handed Weapon or Staff",
            traits: function() {
                return "<b>" + this.type + ":</b> " + this.name + "es are elevated beings who hold vast and varied powers."
            },
            abilities: "<ul><li>Soggy Immortality: Soggy Witches always win at Dedrot's Gamble. At the end of the encounter, you must whoosh your cape around and hand on head.</li> <li>Soggy Sound: You are immune to Silence, state “No Effect”</li></ul>",
            skills: "<ul><li>Unlimited “By my Voice, to <target>, Taunt”</li> <li>2x Packet - “Through Air, Bind Arms” — per Recycle</li> <li>2x Packet - “Through Water, Snare” — per Recycle</li> <li>2x Packet - “Through Water, I maim your <Left/Right>/<Arm/Leg> ” — per Recycle</li> <li>1x Packet - “Through Air, Enslave, 1 minute” - Can only be used to order the players to do inane things like “Bark like a dog” or “Jump up and down”. If this is abused it will be removed. — per Recycle</li></ul>",
            commonLoot: "Up to 1 Onyx Fantail",
            specialLoot: "None",
            costume: "Witch Nose, Witch Hat, Witch Cape",
            desc: "You are a comically wicked witch and are a member of the Soggy Spiral, a spiral that promotes mischief and mayhem. All members are vile arcanists."
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
    fae: { // DONE 
        halcyon: {
            name: "Halcyon (Lance)",
            type: "Fae",
            hp: 15,
            armor: "Armor as worn, Leather only",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b>" + this.name + "can only be affected by skills with the “Earth” keyword, including Execute. After 1 minute of Bleed Out, Heal 15 Hit Points."
            },
            abilities: "<ul><li>Regeneration: Every 1 minute, you may heal 10 Hit Points or Cure all Maimed limbs.</li> <li>Overwhelmed: You are immune to the spell “Tongues”.</li> <li>Inconspicuous: Whenever you take an effect that does not contain the “Earth” keyword, you immediately state “By my voice, Ignore me”</li></ul>",
            skills: "None",
            commonLoot: "Whatever is carried",
            specialLoot: "None",
            costume: "Halcyon Costume",
            desc: "N/A"
        },
        pixie: {
            name: "Pixie",
            type: "Fae",
            hp: 4,
            armor: "None",
            weapons: "1 or 2 One-handed Weapon(s)",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "s are only affected by skills, spells, and executes containing the “Wood” Keyword. State “No Effect”."
            },
            abilities: "N/A",
            skills: "<ul><li>Unlimited Weapon or Packet “Through Air, Spin in place 5 times”</li> <li>Unlimited Weapon or Packet “Through Air, Pacify”</li></ul>",
            commonLoot: "None",
            specialLoot: "Up to 1 Fae Skin — Master Skinner",
            costume: "Pixie Costumes",
            desc: "You are a low-level Fae creature. You are an agent of mischief. You are not out to kill or to be overly violent. You exist to stir emotions, frustrate those not having fun, and for being generally annoying. You have high thoughts of yourself due to your Fae heritage. You can speak common, but feel no need to speak to Humanoids.  You only giggle, chortle, and snort."
        },
        tanis: {
            name: "Tanis",
            type: "Fae",
            hp: 10,
            armor: "None",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + "is immune to all damage and effects not “Through Life”. You will stand back up with full Hit Points after 1 minute of being in Bleed Out. You can only be executed by “Life Execute”, all others, state “No Effect”."
            },
            abilities: "Nightmare Toxin: All healing effects will instead deal Damage to Tanis.",
            skills: "<ul><li>Unlimited Packet “Through Life, I heal you 1 Hit Point”</li> <li>3x “By Voice, Through Life, to my minions, Heal 3 Hit Points”</li> <li>1x “By Voice, Through Life, to my minions, Shell to uncalled strikes, 1 minute”</li></ul>",
            commonLoot: "None",
            specialLoot: "Up to 1 Fae Skin — Master Skinner",
            costume: "Tanis Costume",
            desc: "Plot"
        },
        lethen: {
            name: "The Lethen",
            type: "Fae",
            hp: 5,
            armor: "None",
            weapons: "None",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + " protect themselves by leaving their memories in better times, allowing them to travel back to that place. At any time, you may decide on a location. If you are hit with a Death skill or reach the end of your Death count, return to this location at full Hit Points. If you are executed 10 times during your Death count, this Mantle is broken and you immediately die."
            },
            abilities: "Repressed Memory: When struck by a weapon or skill, you may state “By my Voice, Ignore The Lethen, 1 minute”. Each other of The Lethen that hears this repeats this call.",
            skills: "N/A",
            commonLoot: "None",
            specialLoot: "Up to 1 Fae Skin — Master Skinner",
            costume: "The Lethen Make-up",
            desc: "As written in plot"
        },
        toothFae: {
            name: "Tooth Fae",
            type: "Fae",
            hp: 5,
            armor: "None",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + " is immune to Damage 3 or less. Damage 4 or greater is reduced to 1 damage. You will stand back up with full Hit Points after 1 minute of being in Bleed Out. You can only be executed by “Wood Execute”, all others, state “No Effect”."
            },
            abilities: "Bone Mastery: You are immune to Maim and Weakness, state “No Effect”. Every called skill is “Crit”",
            skills: "<ul><li>2x Weapon - “Crit, Maim”</li> <li>2x Weapon - “Crit, Sleep”</li></ul>",
            commonLoot: "None",
            specialLoot: "Up to 1 Fae Skin — Master Skinner",
            costume: "Tooth Fae Costume",
            desc: "Plot"
        },
        tridrite: {
            name: "Tridrite (Amanda)",
            type: "Fae",
            hp: 50,
            armor: "None",
            weapons: "Any",
            traits: function() {
                return "<b>" + this.type + ":</b> Mantle of Immortality: " + this.name + " can only be stuck by the legendary sword “Willow Spike”. After being struck 5 times by this sword, the Mantle is broken for 5 minutes. If your Mantle is active, state “No Effect” to any skill or weapon strike."
            },
            abilities: "Putrid Swing: You must swing “Disease”, “Poison”, or, “Weakness” with every weapon swing. You choose, please swap them up.",
            skills: "<ul><li>2x, “By my Voice, To those Diseased, Death”</li> <li>10x Weapon - “Damage 2”</li> <li>Within Reason “By my Voice, To those within 10 Feet, Disease”</li> <li>Within Reason “By my Voice, To those within 10 Feet, Poison”</li> <li>Within Reason “By my Voice, To those within 10 Feet, Weakness”</li></ul>",
            commonLoot: "None",
            specialLoot: "Up to 1 Fae Skin — Master Skinner",
            costume: "Tridrite Costume",
            desc: "Plot - Amanda's choice"
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
            name: "miasma - HHS",
            type: "humanoid"
        },
        mixMaster: {
            name: "mix master - HHS",
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

// Add in dictionary of weapon calls and what they mean
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
    //     "<p>" + a + "Monster Name" + b + "name" + c + creatureCall.name + d + 
    //     a + "Creature Type" + b + "type" + c + creatureCall.type + d + 
    //     a + "Hit Points" + b + "hp" + c + creatureCall.hp + d + 
    //     a + "Armor" + b + "armor" + c + creatureCall.armor + d +  
    //     a + "Weapons Used" + b + "weapons" + c + creatureCall.weapons + d + "</p>" + "<hr>" + 
    
    //     h + creatureCall.name + " Traits" + g + "traits" + c + creatureCall.traits() + f + 
    //     h + "Special Abilities" + g + "abilities" + c + creatureCall.abilities + f + 
    //     h + "Skills" + g + "skills" + c + creatureCall.skills + f + 
    //     h + "Common Loot" + g + "commonLoot" + c + creatureCall.commonLoot + f + 
    //     h + "Special Loot" + g + "specialLoot" + c + creatureCall.specialLoot + f + "<hr>" + 

    //     e + "Costuming & Makeup-up Required" + g + "costume" + c + creatureCall.costume + f + 
    //     e + "Description and Role-Play" + g + "desc" + c + creatureCall.desc + f + "</p>";
    // ;

    // Monster Name and Type -- TURN THIS ON WHEN PUSHING CODE
    document.querySelector(".output").innerHTML = 
    "<p><b>Monster:</b> " + titleCase(creatureCall.name) + " — " + titleCase(creatureCall.type) + 
    "<br><b>Humanoid:</b> " + titleCase(humanCall.name) + 
    // " — " + titleCase(humanCall.type) + 
    "<br><b>Classic:</b> " + titleCase(classicCall.name) + " — " + titleCase(classicCall.type) + 
    // "</p>" + 
    // "<p><b>" + titleCase(type) + ".</b> " + capitalLetter(traits) + 
    "</p>";
    
    // Monster Stat Block -- DO NOT LEAVE THIS TURNED ON WHEN CODE IS PUSHED
    // document.querySelector(".output").innerHTML = creatureInfo;
}