const texts = [
    {
        id: 1,
        content: "Vous vous réveillez dans un monde que vous ne connaissez pas, devant un feu de camp. Tout ce dont vous vous rappelez de votre vie d’avant c’est que vous étiez dans un monde harmonieux et paisible. Vous entendez une voix féminine dans votre tête qui vous dit que si vous voulez retourner dans le monde réel vous devrez traverser de grandes épreuves."
    }, // Le premier ID est l'introduction du jeu
    {
        id: 2,
        content: "Bonjour me déchue, la vie heureuse que tu as connue n’est plus. si tu souhaites la retrouver tu devras accomplir plusieurs choses pour moi"
    }, // Le deuxieme ID est la voix, si possible mettre un CSS en italique pour la comprehension du joueur
    {
        id: 3,
        content: "La provenance de cette voix douteuse est inconnue pour vous, vous décidez donc de l’écouter ça, c’est le seul moyen de récupérer votre ancienne vie. Vous vous levez pour explorer ce monde sans vraiment savoir ce qui vous attend."
    }, // Le troisième ID représente le début (officiel) de l'aventure
    {
        id: 4,
        content: "Vous avancez sur un grand pont en pierre qui mène à l’entrée d’un château. A l’entrée de ce château se trouvent 2 coffres, l’un d’eux est grand, vieux et brisé, l'autre est plus petit mais vous avez la sensation que ce coffre renferme quelque chose de puissant."
    }, // Le quatrième ID vous mènes vers les deux premiers loot
    {
        id: 5,
        content: "Tu auras beaucoup de choix à faire durant ton aventure ils pourront beaucoup t’aider ou non."
    }, // Le cinquième ID est aussi la voix (donc a mettre en italique), la voix est censé parler avec un "ton moqueur", si il faut rajouter un ID pour préciser le ton de la voix merci de me le dire
    {
        id: 6,
        content: "Vieux coffre - Vous trouvez un immense katana, la voix vous dit que c’est le Nagakiba une lame puissante qui vous sera d’une grande utilité. Petit coffre - Vous trouvez une épée droite usée, la voix vous dit que cette épée n’est pas très puissante mais que c’est toujours mieux que rien."
    }, // Le sixième ID représente les deux premiers loot et leur contenant
    {
        id: 7,
        content: "Vous décidez donc d’entrer dans le château et tombez nez à nez avec un monstre impressionnant, vous êtes apeuré, la pièce est très sombre, vous réalisez donc que votre périple commence ici."
    }, // Le septième ID est l'entrer dans le chateau, et le premier mob
    {
        id: 8,
        content: "Bon courage cher ami voici ta première épreuve."
    }, // Le huitième ID est la voix off qui continu de vous faire chier, à mettre en Italique et DEBUT DE LA PHASE DE COMBAT
    {
        id: 9,
        content: "Combat terminé vous voyez deux objets tomber au sol A gauche - vous voyez une sorte de méduse peu ragoûtante au sol. A droite - vous apercevez ce qui pourrait s’apparenter à un bouclier."
    }, // Premier loot de mob, les loots sont totalement con mais faut voir avec Erwan
    {
        id: 10,
        content: "Vous vous enfoncez dans le château et descendez un grand escalier en colimaçon qui vous mène à une grande salle illuminée par de grandes torches. Au centre de cette salle vous apercevez un coffre qui semble verrouillé."
        // Suites du donjon, avec un coffre verrouillé en plus
    },
    {
        id: 11,
        content: "Tenter d'ouvrir le coffre avec votre épée ?"
        // Ouvrir le coffre, ou non
    },
    {
        id: 12,
        content: "c'était une “Mimic” que vous battez mais qui vous enlève “% de pv” ou vous tue selon un lancer de dés."
        // Si, on ouvre le coffre, alors, perte % d'hp, selon le lancé de dés (modifier l'id si vous voulez ne pas affiché le passage avec le "qui vous enlève "% de pv")
    },
    {
        id: 13,
        content: "Passer votre chemin"
        // Si, on passe le chemin, alors, toi pas perdre hp
    },
    {
        id: 14,
        content: ".Au fond de cette salle, une grande porte, vous l’ouvrez avec difficulté et découvrez la sortie du château. Une brume épaisse trouble votre vue mais vous distinguez un chemin.Effrayé et surpris, vous trouvez sur votre route un cadavre transpercé d’une dague. "
        // Une salle dans le donjon, découverte d'un cadavre, possibilité de loot la dague
    },
    {
        id: 15,
        content: "Attention les apparences sont parfois trompeuses dans ce monde"
        // C'est une phrase de la voix, a mettre en ITALIQUE
    },
    {
        id: 16,
        content: "Passer discrètement à côté"
        // Rien ne se passe vous courez pour vous éloigner du cadavre et tombez au sol “% pv en fonction du jet de dés
    },
    {
        id: 17,
        content: "Prendre la dague"
        // Vous obtenez la dague "Reduvia", une dague puissante
    },
    {
        // l'ID 18 EST VALABLE QUE SI VOUS PRENEZ LA DAGUE !
        id: 18,
        content: "Bonne initiative, cette dague est très rapide et est très puissante"
        // Message de la voix, à mettre en ITALIQUE
    },
    {
        id: 19,
        content: "Au bout de ce long chemin vous arrivez face à un à un désert de sable rouge sang."
        // On arrive au premier boss
    },
    {
        id: 20,
        content: "Voici le Désert du général Radan, le fléau des astres ! sort vainqueur de ce combat et tu auras peut être une récompense"
        // Premier combat de boss contre le général Radan (Boss de l'univers d'Elden ring)
        //win => loot epée du fléau des astres
        //lose => Game over

    },
    {
        id: 21,
        content: "Soudain, tout autour de vous se déforme, vous tombez dans le vide de peur, pendant votre chute, vous vous évanouissez."
        // Première étape du changement d'univers vers le monde de Monster Hunter World
    },
    {
        id: 22,
        content: "Vous vous réveillez encore une fois dans un monde totalement différent. Ce monde est rempli de plantes et d'animaux inconnus."
        // Première arriver dans le monde de MHW
    },
    {
        id: 23,
        content: "Merci mon ami, je vois que je peux compter sur toi. Prend cette rune, elle te rendras plus puissant"
        // Message de la voix, donc mettre en ITALIQUE + Augmentation des caractéristiques
    },
    {
        id: 24,
        content: "Vous reprenez vos esprits, vous découvrez que vous êtes dans un village a moitié détruit et désert. Devant vous, une vieille forge très sombre. Vous ne percevez pas bien ce qu’il peut y avoir à l'intérieur."
        // C'est votre arriver dans la première zone de MHW
    },
    ]
                        // MONDE DE MONSTER HUNTER WORLD
    const MHW = [
    
    {
        id: 1,
        content: "Je te conseille de quitter ce village rapidement, il semblerait que quelque chose vient de tout ravager ici."
        // Message de la voix > Italique
    },
    {
        // id2 = PREMIER CHOIX
        id: 2,
        content: "Entrer dans la forge"
        // une enclume vous permet d'améliorer votre bouclier en “bouclier visage” (atk++ def++) | (jet de dés: petite chance de briser le bouclier)
    },
    {
        id: 3,
        content: "Déguerpir en vitesse"
        // Jet de dés = Petite chance de tomber et de briser votre bouclier (De le faire tomber dans un lieu inaccessible serais plus logique) | Rien ne se passe
    },
    {
        id: 4,
        content: "Vous sortez donc du village et vous vous enfoncez dans une forêt majestueuse les arbres sont immenses vous contemplez ce paysage qu’on ne voit nulle part ailleurs."
        // Arriver dans la forêt
    },
    {
        id: 5,
        content: "En vous enfonçant dans cette forêt, obnubilé par le paysage, vous ne vous apercevez pas que face à vous se tient un immense monstre draconique. Le monstre rugit, et vous fonce dessus"
    },
    {
        id: 6,
        content: "CAAAAAAAAAAAAAAALC()"
        // Rugissement du dragon, à mettre en majuscule / en gras
        // --Combat contre un monstre (possibilité de détruire une partie du monstre)--
        // loot => volto hache.
        // Perdre = end game
    },
    {
        id: 7,
        content: "Après ce combat éprouvant vous décidez de vous reposer la faim commence à se faire ressentir vous regardez le monstre avec dépit..."
    },
    {
        id: 8,
        content: "Faire cuire un peu de viande du monstre"
        // Augmentation des stats
    },
    {
        id: 9,
        content: "Renoncer à manger vous ne connaissez pas ce monde c’est sûrement dangereux"
        // Malus de pv à cause de la faim
    },
    {
        id: 10,
        content: "Vous repartez donc en chasse après tant d'épreuves vous devenez méfiant à chaque pas.Votre chemin dans cette forêt se poursuit vous tombez sur une petite cabane mais maintenant vous êtes méfiant, un homme sort de cette cabane et vous interpelle"
        // Intéraction avec l'individu mystérieux
    },
    {
        id: 11,
        content: "Bonjour je m’appelle JSON souhaitez vous entrer chez moi un moment?"
        // Voix du pnj = En Italique
    },
    {
        // Deux choix s'offrent à vous
        id: 12,
        content: "D’accepter et entrer dans sa cabane"
        //vous vous reposez grâce à lui (+caractéristiques)
    },
    {
        id: 13,
        content: "Vous le remercier et vous continuer votre route"
        // il le prend mal vous lance une pierre ( -% HP)
    },
    {
        id: 14,
        content: "Vous reprenez donc la route et sortez enfin de la forêt. Vous arrivez sur une plaine gigantesque."
    },
    {
        id: 15,
        content: "Je connais cet endroit reste sur tes gardes mon ami"
        // Message de la voix = ITALIQUE
    },
    {
        id: 16,
        content: "Vous décidez donc de traverser cette plaine tout en restant attentif à toute éventualité. Vous entendez un bruit sourd puis un rugissement fort et grinçant."

    },
    {
        id: 17,
        content: "Soudain une bête énorme surgit des nuages et se pose devant vous !"
    },
    {
        id: 18,
        content: "Mon dieu c’est un Nergigante une bête extrêmement féroce adieu mon ami"
        // Message de la voix = ITALIQUE
        // --Combat contre le Nergigante--
        // win => loot = 2 choix  corne de chasse (+atk +def) || insectoglaive = (++atk)

    },
    {
        id: 19,
        content: "Encore une fois vous tombez dans le vide vous n’avez plus tellement peur, vous commencez à être habitué, vous savez qu’au moins vous ne serez pas évanoui pendant le trajet. Malheureusement votre bouclier heurte votre tête vous tombez dans les pommes."
        
    },
    ]
    const WCS = [
                        // DEBUT DU MONDE WILD CODE SCHOOL
    {
        id: 1,
        content: "Encore un réveil difficile mais cette fois ce monde vous parle beaucoup plus, mais vous ne savez pas pourquoi. Vous êtes entouré de machines informatiques, de balises et d'algorithmes. Bizarrement vous vous sentez bien."
        // Premier pas dans l'univers de la wcs (ambiance matrix ou weeb ou geek ou nerd)
    },
    {
        id: 2,
        content: "Bienvenue dans la salle des serveurs, vous êtes le premier à arriver jusqu’ici bravo a vous."
        // Message de la voix = ITALIQUE
    },
    {
        id: 3,
        content: "Devant vous un ordinateur est déverrouillé."
        // vous osez l’utiliser => vous gagnez le boucliMac (def +++)
        //vous ne l’utilisez pas => L’ordinateur ne laisse pas passer ça il vous rickroll vous perdez (%hp) 

    },
    {
        id: 4,
        content: "Vous avancez dans la salle des serveurs en sifflotant comme si vous étiez dans votre élément. Vous entendez comme un violon au loin cela vous dit quelque chose. Vous apercevez au fond de la salle des serveurs deux silhouettes, vous vous approchez afin de savoir qui se cache dans l’ombre."
        // On arrive dans la salle ou se trouve deux mobs
    },
    {
        id: 5,
        content: "Soudain un violoniste sanguinaire et un ostéopathe sadique engagent le combat avec vous !"
        // --Combat contre les profs–
        //choix entre deux armes => lame de la fonction (atk ++ def ++) || Katanalgorithme (degats +++)

    },
    {
        id: 6,
        content: "Sais tu vraiment pourquoi tu es ici ? je pense que tu as eu beaucoup de chance maintenant c’en est fini de toi."
        // Message de la voix = ITALIQUE
    },
    {
        // --Combat contre la directrice de la salle des serveurs--
        // SI WIN
        id: 7,
        content: "Vous vous réveillez dans votre monde assez fatigué, tout ceci n'étais apparemment qu'un rêve, mais vous ressentez d'atroces courbatures vous laissant peut-être penser le contraire ..."
    },
        // SI LOOSE
    {
        id: 8,
        content: "Vous vous réveillez, endormi sur votre clavier mécanique, la touche échap est rentré dans votre œil ce qui a perforer votre cerveau, cela rentre donc lentement et douloureusement, vous mourrez d'une hémorragie interne dans la vraie vie."
        // Proposition de relancer la partie
    },
];

export default texts;






// import React from 'react';

// class TextDisplay extends React.Component {
//   render() {
//     const { text } = this.props;

//     return (
//       <div>
//         <p>{text}</p>
//       </div>
//     );
//   }
// }

// export default TextDisplay;