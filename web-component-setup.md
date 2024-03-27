## Mise en place d'un composant web avec Vue3

La création d'un composant web avec Vue.js se fait assez simplement, du moins dans cet exemple car il s'agit d'un compteur très simple. 

La première chose à faire après la mise en place du projet est de simplement créer un composant vue. SimpleCounter.vue dans notre cas

![alt text](readme-ressources/counter-vue-file.png)

Contenu du composant : 

![alt text](readme-ressources/counter-component-file-content.png)

### Transformation en élément personnalisé

La prochaine étape est d'indiquer à Vue que l'on souhaite en faire un élément personnalisé (en gros notre composant web). 

Dans cet exemple, un fichier javascript nommé custom-element-setup.js a été créé à part pour n'imclure que le code en rapporta avec la mise en place de l'élément personnalisé
Ce fichier est placé dans le dossier src du projet:

![alt text](readme-ressources/custom-element-setup.png)

Le code permettant de faire de notre composant Vue un composant web: 

![alt text](readme-ressources/cutom-element-setup-file-content.png)

### Test en local du composant web

Afin de vérifier si le composant web marche comme attendu, il est nécessaire de le tester, le test se fera dans le fichier index.html à la racine du projet: 

![alt text](readme-ressources/index-html-location.png)

C'est là que prend toute l'importance de l'implementation de notre composant web un peu plus tôt, le nom donné à notre élément personnalisé s'implémente comme une simple balise html

![alt text](readme-ressources/html-for-local-testing.png)

Voici le résultat attendu lorsque vous testerez le rendu de votre page html en localhost: 

![alt text](readme-ressources/localhost-web-component-result.png)

Prochaine étape, faire le build du composant web: 



**Sources :** 

Composants Web:

https://developer.mozilla.org/en-US/docs/Web/API/Web_components


Composants web avec Vue.js

https://vuejs.org/guide/extras/web-components

Tutoriel plutôt bien fait sur les composants web avec Vue

https://www.thisdot.co/blog/building-web-components-with-vue-3-2