export const EldenTexts = [
  {
    id: 1,
    content:
      "You wake up in a world you don't recognize, in front of a campfire. All you remember from your previous life is that you were in a harmonious and peaceful world. You hear a female voice in your head telling you that if you want to return to the real world, you'll have to overcome great trials.",
  }, // Le premier ID est l'introduction du jeu
  {
    id: 2,
    content:
      "Hello fallen soul, the happy life you once knew is no more. If you wish to reclaim it, you must accomplish several tasks for me",
  }, // Le deuxième ID est la voix, si possible mettre un CSS en italique pour la compréhension du joueur
  {
    id: 3,
    content:
      "The origin of this dubious voice is unknown to you, so you decide to listen to it; it's the only way to retrieve your old life. You rise to explore this world without really knowing what awaits you.",
  }, // Le troisième ID représente le début (officiel) de l'aventure
  {
    id: 4,
    content:
      "You advance on a large stone bridge that leads to the entrance of a castle. At the entrance of this castle, there are 2 chests, one of them is large, old, and broken, the other is smaller but you have the feeling that this chest contains something powerful.",
  }, // Le quatrième ID vous mène vers les deux premiers loots
  {
    id: 5,
    content:
      "You will have many choices to make during your adventure; they can either help you... or not.",
  }, // Le cinquième ID est aussi la voix (donc à mettre en italique), la voix est censée parler avec un "ton moqueur", si il faut rajouter un ID pour préciser le ton de la voix merci de me le dire
  {
    id: 6,
    content:
      "Old chest: You find an immense katana, the voice tells you that it's the Nagakiba, a powerful blade that will be of great use to you.",
  },
  {
    id: 65,
    content:
      "Small chest: You find a worn straight sword, the voice tells you that this sword isn't very powerful but it's better than nothing.",
    // Les sixième ID représente les deux premiers loots et leur contenant
  },
  {
    id: 7,
    content:
      "You decide to enter the castle and come face to face with an impressive monster, you are scared, the room is very dark, so you realize that your journey begins here.",
  }, // Le septième ID est l'entréz dans le château, et le premier mob
  {
    id: 8,
    content: "Good luck, dear friend. Here's your first trial.",
  }, // Le huitième ID est la voix off qui continue de parler avec un ton moqueur, à mettre en italique et DÉBUT DE LA PHASE DE COMBAT
  {
    id: 9,
    content:
      "Combat over: you see two items fall to the ground. On the left - you see some sort of unsightly jellyfish on the ground. On the right - you spot what could pass as a shield.",
  }, // Premier loot de mob, les loots sont totalement inutiles mais faut voir avec Erwan
  {
    id: 10,
    content:
      "You delve into the castle and descend a large spiral staircase leading you to a large hall illuminated by large torches. In the center of this hall, you see a chest that seems locked.",
    // Suites du donjon, avec un coffre verrouillé en plus
  },
  {
    id: 11,
    content: "Attempt to open the chest with your sword?",
    // Ouvrir le coffre, ou non
  },
  {
    id: 12,
    content:
      "It was a Mimic but he was stronger than you. He took the upper hand on you.",
    // Si, on ouvre le coffre, alors, perte de ___% d'hp | faible % de chance d'être tué avec un lancé de dés.
  },
  {
    id: 13,
    content: "Pass by.",
    // Si on passe le chemin, alors, le joueur ne pert pas d'hp
  },
  {
    id: 14,
    content:
      "At the back of this room, you find yourself facing a large door, you open it with difficulty and discover the exit of the castle. Thick mist obscures your vision but you make out a path. Frightened and surprised, you find a corpse pierced by a dagger on your way.",
    // Une salle dans le donjon, découverte d'un cadavre, possibilité de loot la dague
  },
  {
    id: 15,
    content: "Continue on your way or search the body ?",
    // C'est une phrase de la voix, à mettre en ITALIQUE
  },
  {
    id: 16,
    content: "Sneak past",
    // Rien ne se passe vous courez pour vous éloigner du cadavre et tombez au sol ___% pv en fonction du jet de dés
  },
  {
    id: 17,
    content: "Take the dagger",
    // Vous obtenez la dague "Reduvia", une dague puissante
  },
  {
    // l'ID 18 EST VALABLE QUE SI VOUS PRENEZ LA DAGUE !
    id: 18,
    content: "Good initiative, this dagger is very fast and very powerful.",
    // Message de la voix, à mettre en ITALIQUE
  },
  {
    id: 19,
    content:
      "At the end of this long path, you arrive facing a desert of blood-red sand.",
    // On arrive au premier boss
  },
  {
    id: 20,
    content:
      "Here is the Desert of General Radan, the scourge of the stars! Come out victorious from this battle and you may receive a reward.",
    // Premier combat de boss against General Radan (Boss of Elden Ring universe)
    // win => loot epée du fléau des astres
    // lose => Game over
  },
  {
    id: 21,
    content:
      "Suddenly, everything around you distorts, you fall into the void out of fear, during your fall, you pass out.",
    // Première étape du changement d'univers vers le monde de Monster Hunter World
  },
  {
    id: 22,
    content:
      "You wake up once again in a totally different world. This world is filled with unknown plants and animals.",
    // Première arriver dans le monde de MHW
  },
  {
    id: 23,
    content:
      "Thank you my friend, I see I can count on you. Take this rune, it will make you more powerful.",
    // Message de la voix, donc mettre en ITALIQUE + Augmentation des caractéristiques
  },
  {
    id: 24,
    content:
      "You regain consciousness, discovering that you are in a village halfway destroyed and deserted. In front of you, an old forge stands, very dark. You can't quite make out what might be inside.",
  },
  // C'est votre arriver dans la première zone de MHW
];
// MONDE DE MONSTER HUNTER WORLD
export const MHWTexts = [
  {
    id: 1,
    content:
      "I advise you to leave this village quickly; it seems something has just ravaged everything here.",
    // Message de la voix > Italique
  },
  {
    // id2 = PREMIER CHOIX
    id: 2,
    content: "Enter the forge.",
    // une enclume vous permet d'améliorer votre bouclier en “bouclier visage” (atk++ def++) | (jet de dés: petite chance de briser le bouclier)
  },
  {
    id: 3,
    content: "Scamper away quickly.",
    // Jet de dés = Petite chance de tomber et de briser votre bouclier (De le faire tomber dans un lieu inaccessible serais plus logique) | Rien ne se passe
  },
  {
    id: 4,
    content:
      "So, you leave the village and delve into a majestic forest; the trees are immense, and you gaze upon this landscape that is unlike any other.",
    // Arriver dans la forêt
  },
  {
    id: 5,
    content:
      "As you venture into this forest, captivated by the scenery, you fail to notice that an immense draconic monster stands before you. The monster roars and charges towards you.",
  },
  {
    id: 6,
    content: "CAAAAAAAAAAAAAAALC() !",
    // Rugissement du dragon, à mettre en majuscule / en gras
    // --Combat contre un monstre (possibilité de détruire une partie du monstre)--
    // loot => volto hache.
    // Perdre = end game
  },
  {
    id: 7,
    content:
      "After this grueling battle, you decide to rest; hunger begins to gnaw at you as you look at the monster with dismay...",
  },
  {
    id: 8,
    content: "Cook some meat from the monster.",
    // Augmentation des stats
  },
  {
    id: 9,
    content:
      "Abstain from eating; you are unfamiliar with this world, and it's surely dangerous.",
    // Malus de pv à cause de la faim
  },
  {
    id: 10,
    content:
      "So, you set off hunting again after so many trials; you become wary with every step. Your journey through this forest continues; you stumble upon a small cabin, but now you're cautious. A man emerges from this cabin and calls out to you.",
    // Intéraction avec l'individu mystérieux
  },
  {
    id: 11,
    content:
      "Hello, my name is JSON. Would you like to come inside my cabin for a moment?",
    // Voix du pnj = En Italique
  },
  {
    // Deux choix s'offrent à vous
    id: 12,
    content: "Accept and enter his cabin.",
    // vous vous reposez grâce à lui (+caractéristiques)
  },
  {
    id: 13,
    content: "Thank him and continue on your way.",
    // il le prend mal vous lance une pierre ( -% HP)
  },
  {
    id: 14,
    content:
      "You then resume your journey and finally exit the forest. You arrive at a gigantic plain.",
  },
  {
    id: 15,
    content: "I know this place; stay on your guard, my friend.",
    // Message de la voix = ITALIQUE
  },
  {
    id: 16,
    content:
      "So, you decide to cross this plain while remaining attentive to any eventuality. You hear a dull noise, then a loud, grating roar.",
  },
  {
    id: 17,
    content:
      "Suddenly, a huge beast emerges from the clouds and lands in front of you!",
  },
  {
    id: 18,
    content:
      "My god, it's a Nergigante, an extremely ferocious beast. Farewell, my friend.",
    // Message de la voix = ITALIQUE
    // --Combat contre le Nergigante--
    // win => loot = 2 choix  corne de chasse (+atk +def) || insectoglaive = (++atk)
  },
  {
    id: 19,
    content:
      "Once again, you fall into the void; you're not so scared anymore, beginning to get used to it, knowing at least you won't be unconscious during the journey. Unfortunately, your shield hits your head; you black out.",
  },
];
export const WCSTexts = [
  // DEBUT DU MONDE WILD CODE SCHOOL
  {
    id: 1,
    content:
      "Another difficult awakening but this time this world speaks to you much more, but you don't know why. You are surrounded by computer machines, beacons, and algorithms. Strangely, you feel good.",
    // Premier pas dans l'univers de la wcs (ambiance matrix ou weeb ou geek ou nerd)
  },
  {
    id: 2,
    content:
      "Welcome to the server room, you are the first to arrive here, congratulations to you.",
    // Message de la voix = ITALIQUE
  },
  {
    id: 3,
    content: "In front of you, a computer is unlocked.",
    // vous osez l’utiliser => vous gagnez le boucliMac (def +++)
    // vous ne l’utilisez pas => L’ordinateur ne laisse pas passer ça il vous rickroll vous perdez (%hp)
  },
  {
    id: 4,
    content:
      "You move forward in the server room, whistling as if you were in your element. You hear what sounds like a violin in the distance, it rings a bell. You see two silhouettes at the back of the server room, you approach to find out who is hiding in the shadow.",
    // On arrive dans la salle ou se trouve deux mobs
  },
  {
    id: 5,
    content:
      "Suddenly, a bloodthirsty violinist and a sadistic osteopath engage in combat with you!",
    // --Combat contre les profs–
    // choix entre deux armes => lame de la fonction (atk ++ def ++) || KatanAlgorithme (degats +++)
  },
  {
    id: 6,
    content:
      "Do you really know why you're here? I think you've been very lucky, but now it's over for you.",
    // Message de la voix = ITALIQUE
  },
  {
    // --Combat contre la directrice de la salle des serveurs--
    // SI WIN
    id: 7,
    content:
      "You wake up in your world quite tired, all this apparently was just a dream, but you feel excruciating soreness that might make you think otherwise...",
  },
  // SI LOOSE
  {
    id: 8,
    content: "You have lost, would you like to restart the game?",
    // Proposition de relancer la partie
  },
];
