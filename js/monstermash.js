typeTraits = {
    "Beast": "Beasts are heartier, providing them more health and natural armor. Once every 5 minutes, you may state “Resist” when struck with one of the following effects: Bind, Paralyze, Pin, Prone, Slow, or Snare",
    "Construct": "Constructs are unable to stray from their creator's will and are immune to Corrupt, Enslave, Fear, and Sleep; State “No Effect”. Constructs cannot be healed by normal means. Constructs of the same type may spend 1 minute of uninterrupted roleplay to heal another construct: State “To Construct, Heal 10 Hit Points”",
    "Elemental": "Elementals are immune to Disarm, Disease, Poison, Maim, Shatter and anything with the same Element Keyword; State “No Effect”. An Elemental may choose to call their element on any weapon strike",
    "Monstrous Humanoid": "Each Monstrous Humanoid is unique, possessing their own abilities",
    "Plant": "Plants can draw power from Hyreath, and may state “I Root myself to the ground, 1 minute”. If the Snare effect lasts the entire minute, restore up to 5 natural armor. This cannot exceed your base number. Deep Woods Only: Immune to Crit; State “Resist”",
    "Undead": "As unliving entities, Undead are immune to Disease, Poison, Sleep, Waylay, and Weakness; State “No Effect”. Undead are diverse in nature, and each has their own traits",
    "Fae": "Each Fae has a special trait that grants them extended lives, a Mantle of Immortality. Each Fae has their own Mantle",
    "Divine": "Elevated beings who hold vast and varied powers",
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function monsterMash() {
    const keys = Object.keys(typeTraits);
    const type = randomString(keys);
    const traits = typeTraits[type];

    document.querySelector(".output").innerHTML = "<p><b>" + type + ".</b> " + traits + ".</p>"; 
}