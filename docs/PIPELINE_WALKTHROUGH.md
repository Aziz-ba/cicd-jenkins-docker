Projet Pipeline CI/CD:

Alfredo Rodriguez / med Aziz Ben Ayed:


Project : 

Premièrement : Préparation des bases du projet :

1ère étape : prendre un projet d’internet (répliquant l’usage d’un utilisateur lambda), dans notre cas c’est une application nodejs
2ème étape : création d’un fichier dockerfiles dans le projet
3ème étape : création d’un dossier Jenkins File
4ème étape : créer une pipeline sur jenkins
5ème étape : création d’un docker hub credentials
installation de docker sur jenkins

Deuxièmement : Création du dossier dockerfiles
img1 : 
va permettre de pull la dernière image, ce dossier va nous permettre de convertir l’application principale en un document Dockerfile.       
On installe ensuite sur notre terminal avec la commande npm install,l’application dockerfile va elle à la différence de jenkins(8080) tourner sur le port 3000.


Troisièmement : Amorce du Projet

Etapes création d’un dossier Jenkins File
img3:

Le dossier jenkins file a plusieurs fonctions/etapes:
la première est de pouvoir lire le fichier a partir de github / gitlab
la deuxième étapes et de pouvoir construire une image docker a partir du contenu SCM/github
la troisième étapes et de pouvoir accéder à docker hub grâce aux credentials que l’on obtient a partir de docker hub
la dernière étapes va nous permettre de juste push une image

Il va ensuite falloir connecter le dossier jenkins file a docker, pour cela nous allons utiliser clé, pour pouvoir, READ, WRITE, DELETE.

img4:
img5:

Suite à cette étape, nous allons sur jenkins afin de “manage  Credentials”, pour que jenkins puisse avoir accès au docker hub:
etapes:
administrateur  jenkins
manage credentials
on clique sur Systems
on clique ensuite sur domaine => Identifiants globaux
puis add credentials

add credentials

img6:
On attribue un ID qui sera sur le dockerfiles

Pipeline Docker / permettre la connexion avec docker hub

On va donc dans cette pipeline ajouter le code qui est dans le dossier jenkinsfile, avec le id créé dans credentials

explication des toutes les étapes du dockerfiles:
stage(‘SCM Checkout’): étape qui va permettre de prendre le code de github.
stage(‘	Build docker image’): étape qui va permettre de construire une image à partir d’un code.
stage(‘login to dockerhub') : étape de connexion entre dockers et jenkins grâce notamment au credentials.
stage(‘push image’) : étape qui va permettre de transmettre l’image à docker hub.

img7:

Resultat: img8:

Pour conclure:
Conclusion: ce projet nous a paru très difficile, c’est une des raison pour laquelle nous n’avons pas fini a temps, cependant nous avons pu apprendre/connaître des bases en jenkins/dockers/github,c’est un projet qui aurait pu nous donner une entreprise ! Avec plus de temps et un support technique, ce tp aurait pu être réalisé. Nous tenons à rajouter que nous avons eu beacoup d’erreurs du terminal bash, et que seul un des deux pc a pu manipuler les images dockers etc…



