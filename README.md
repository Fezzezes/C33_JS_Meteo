# CVM Météo

## Francois Bouchard

### Animations

#### Neige
Fait tomber des petits flocons blancs de grosseurs variées lorsqu'il neige.
La trajectoire et la vitesse des flocons est influencée par le vent
L'animation peut être forcée avec la commande 'sudo snow' dans la ligne de commande de la page météo.
Le vent peut être contrôlé avec les boutons +- dans la page météo.
#### Pluie
Fait tomber des gouttes de pluie lorsqu'il pleut.
L'animation peut être forcée avec la commande 'sudo rain' dans la ligne de commande de la page météo.
#### Satellite
À tout les 1000 ticks, un satellite passera dans le background;
L'animation peut être forcée avec la commande 'sudo sat' dans la ligne de commande dans la page météo.
#### Loading Screen
À chaque changement de ville, l'image de background de la ville apparaitra progressivement de façon saccadé pour simuler un chargement de page.
À la fin de l'animation, trigger l'animation de la pluie ou de la neige si il y en a. Trigger aussi l'animation typewriter pour écrire la description de la météo actuelle.
Si le user tente de changer de ville avant la fin de l'animation, recommence celle-ci
#### Typewriter
À la fin de l'animation du loading screen, écrit progressivement la description de la météo.
Si le user tente de changer de ville avant la fin de cette animation, annulle celle-ci
#### Message
Lorsqu'une ligne de commande est entrer dans le terminal, fait apparaitre un message (erreur/succès) dans celui-ci. 
Le message perd progressive de l'opacité jusqu'à devenir invisible. Si le user place sa souris sur le message, l'animation sera pausé (et recommencera lorsque la souris ne sera plus sur le message)
Utilisé aussi pour faire apparaitre un message d'erreur si le mauvais mot de passe est entré dans la page index.
### Lamp
L'alpha du box-shadow vert sous le 'h3 id=terminal' dans la page index augmente et diminue à des intervalles aléatoires pour faire un effet de flicker de luminère néon.
