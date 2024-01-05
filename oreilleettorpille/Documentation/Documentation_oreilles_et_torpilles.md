
# Worshop Arcade - Oreilles et torpilles
Flore QUITTET - Antoine DESSAINT - Martin FOURNY - Paul MAURIN - Coralie PICARD 

## Contexte
Pour ce workshop arcade, nous sommes 5 designers sur le projet intitulé Oreilles et Torpilles. Le challenge était de créer un jeu d’arcade sans écrans en utilisant des contrôleurs alternatifs. Cette contrainte nous a permis de voir comment on pourrait détourner la façon de jouer à un jeu. 

## Concept
Notre jeu est un jeu sonore qui met en scène une bataille sous-marine entre deux adversaires qui se font face dans des sous-marins. Les deux joueurs sont munis de casques audios afin de détecter la présence du sous sous-marins adverse, ils doivent faire pivoter leur radar à l’aide du volant puis ensuite tirer des torpilles pour abattre l’adversaire. La partie se déroule en deux manches gagnantes et chaque manche se termine si un joueur est touché ou si un des deux joueurs se retrouve à court de munitions. Il n'ont que trois torpilles.

## Matériels nécessaire 
<ul><li>1 carte arduino Mega </li>
<li>2 boutons arcades </li>
<li>2 encodeurs rotatifs </li>
<li>2 casques audio </li>
<li>6 Leds rouges </li>
<li>2 afficheurs 7 segments (qui finalement ont été supprimé n’ayant pas fonctionné avec la carte Arduino Mega) </li></ul>

## Le principe
Durant la partie les sous-marins ne se déplacent pas ils ne font que tourner sur eux même en suivant les données des encodeurs. Le son du radar est tout le temps diffusé mais devient plus aigu quand on est dans la zone de détection, (en vérité il s’accélère mais cela le rend plus aigu).
Pour démarrer une partie il faut appuyer sur les deux boutons deux fois, ensuite les données des encodeurs et des boutons sont captées par arduino et envoyées sur processing. <br>

Chaque joueur à 3 Leds pour indiquer son nombre de torpilles restantes. Ces leds sont gérées par arduino. <br>

Pour que le deuxième joueur puisse jouer il faut que l’ordinateur 1 crée une connexion sur processing afin d’envoyer à l’ordinateur 2 quel son il doit jouer à quel moment. <br>

Pour la détection, l'ordinateur 1 doit envoyer en temps réel les données de l’encodeur rotatif 2 (enc2). Il aura ensuite besoin du code permettant de rendre le son de plus en plus aigu. <br>

Les joueurs n’ont pas de visuel mais il est possible de suivre l’avancé de la partie grâce à l’écran de l'ordinateur 1.

## Code Arduino
Le code arduino va récupérer les données des deux encodeurs et des deux boutons et les envoyer à processing. C’est aussi sur arduino que gère les leds qui indiquent le nombre de torpilles restantes.

## Code Processing
Le code processing de l’ordinateur 1 va gérer le code principal, récupérant les données d’arduino, gérant la construction des parties, les scores, les sons, et l’envoie de données à l’ordinateur 2.

Un second code processing sur l’ordinateur 2 va réceptionner les messages de l’ordinateur 1 et jouer les bons sons en fonction.

![vu sur processing](../documentation/Images/visuels.jpg)

## Précisions
Dans le montage final les leds ne fonctionnaient pas bien, cela vient peut-être du montage. 

Un bug surgit parfois au niveau des sons que l’on entend plus, re-téléverser le code arduino et relancer le code processing semble le résoudre.

À la fin d’une manche le son de fin de partie se lance en même temps c’est un bug qui n'a pas été réglé.


## Sons
Nous avons réalisé tous les sons du jeu, les voix ont été enregistrées par Paul Maurin. Ces sons nous permettent au jeu d’être plus immersif et de bien comprendre ce qu’il faut faire. Il donne aussi un retour au joueur lui permettant de savoir s’il gagne, perd, s’il lui reste une seule torpille, ou bien si son adversaire a tiré dans la zone de détection.


## Maquette
Concernant la structure de notre maquette, nous imaginons un tableau bord qui existe dans les sous-marins un peu incliné vers l’avant du joueur afin qu’il puisse utiliser le volant pour contrôler son sous-marin et le bouton à appuyer sur sa droite pour qu’il puisse lancer une torpille sur l’adversaire. 

![installation vu de l'intérieur](../documentation/Images/IMG_0621.JPG)


La maquette se compose d'une structure en bois pour avoir une borne très solide. Elle est ensuite recouverte d'un seule bande de carton. Pour fixer les deux ensembles on a utilisé du scotch mais pour un rendu moins temporaire on pourrait utiliser de la colle.

![stucture](../documentation/Images/patron.png)
![stucture](../documentation/Images/IMG_0565.png)

Le volant et la poignée ont été conçus pour être associés à nos contrôleurs alternatifs pour diriger notre sous-marin et tirer sur notre adversaire. Nous avons procédé à plusieurs expérimentations afin de trouver le meilleur assemblage possible des contrôleurs alternatifs à nos maquettes pour que les joueurs puissent jouer confortablement. Le tout est aussi fait en carton. Le corps du bouton est fixé au bois mais il faut penser à laisser un espace pour le fil du bouton.

![dessin éclaté du volant](../documentation/Images/montage_eclate.jpg)
![volant](../documentation/Images/IMG_0589.png)
![prise en main bouton](../documentation/Images/IMG_0590.png)


## Scénographie
Et enfin nous avons utilisé des praticables pour créer notre espace clos en dessous et que les joueurs puissent jouer séparément. Nous avons déployé des toiles noires qui enrobent la scène afin de rendre l’expérience plus immersive. Une guirlande de lumière rouge permet de se mettre un peu plus dans l’ambiance. 

![installation vu de l'intérieur](../documentation/Images/cockpitlumière.jpg)

De l’extérieur on ne voit qu’une table couverte de couvertures noires et on entend une musique de fond. Cette musique a été composé par Paul en reprenant le fond sonore du jeu.

![Praticables](../documentation/Images/praticables.png)
![installation vu de l'extérieur](../documentation/Images/paul_installation.jpg)

## Etapes de montage
<ul>
1) Connecter les composants <br>
2) Récupérer le code arduino et le téléverser <br>
3) Récupérer le code processing et vérifier la connexion <br>
4) Récupérer le code processing du joueur 2 sur un autre ordinateur en vérifiant que les sons sont dans le dossier <br>
5) Connecter les 2 ordinateurs sur le même réseau et insérer les adresses ip <br>
6) Vérifier la connection <br>
7) Réaliser la maquette <br>
8) Insérer les boutons, led et encodeurs aux bons emplacements <br>
9) Placer le volant <br>
10) Brancher le casque du joueur 1 sur l'ordinateur 1, et celui du joueur 2 sur l'ordinateur 2 <br>
11) Téléverser le code arduino <br>
12) Lancer le code processing du joueur 2 <br>
13) Lancer la partie sur le code processing du joueur 1 <br>
14) S'amuser et exploser le sous-marin adverse 
</ul>