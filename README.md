# Todo List
## TODO
    - Cliquer sur la ligne vide
    - Écrire une tache
    - Entrer ou cliquer sur + pour ajouter
### Ajouter
    - Écrire dans le input
    - Cliquer sur +
    - Ajouter le li avec class="todo" en début de liste
### Supprimer
    - Cliquer sur supprimer
### Modifier
    - Double Cliquer sur le text
    - Afficher le choix de modifier ou supprimer
### Check
    - Ajouter class="done" et faire descendre en avant dernier de la liste

## Organisations
## Crée une maquette de l'app
## HTML
### Faire le squelette (HTML)

- section
  - header
    - btn refresh
    - date du jour
  - conteneur
    - liste
      - tâches
        - check btn
        - text
        - trash btn
    - ajout d'une tâche
      - btn ajout tâche
      - input tâche

## JS
### Sélectionner les éléments avec JS
* btn refresh
* date
* list
* input

```javascript
const refresh = document.querySelector(
  "main section section:first-child p:first-child"
);
```

### Fonction pour ajouter une tâche dans la liste
#### insertAdjacentHTML() (plus précis que innerHTML())
> https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML

```javascript
element.innertAdjacentHTML(position, text);
```
#### Ajouter la possibilité d'ajouter avec la touche entrer
Avec la touche entrer
Keycode pour entrer : 13
* Si le input est vide ne rien faire
* Clear le input
### Créer une liste 
Dans un tableau
Chaque tâche est un objet 
  - nom: string
  - id: int
  - fait: boolean
  - poubelle: boolean

Compter le nombre de tâche dans la liste
 
### Modifier une tâche

### Fonction pour cocher le status des tâches
changer la class
```javascript
element.classList.toggle('nom')
```
changer les paramètres de l'objet
### Fonction pour supprimer tâche
* Cliquer sur la corbeille
* On veut supprimer le parent de l'élément
  * Pour cela on va sélectionner le deuxième parent et supprimer son enfant 
* Changer le status de la tâche
### Sélectionner un élément crée dynamiquement
> On ne peut pas ajouter des events listener pour toutes les icônes.
La solution est de travailler sur le parent.
```javascript
const list  = document.getElementById("list")
list.addEventListener("click",(e)=>{
  let element = e.target // va sélectionner l'objet tâche
})
```
### Enrengistrer la todolist dans le stockage local
#### Enrengistrer des données dans localStorage
localStorage.setItem('key','value')
#### Récupérer des données depuis localStorage
localStorage.getItem('key')
#### Supprimer toutes les données du localStorage
localStorage.clear()
#### Convertir une valeur JavaScript en chaîne JSON
JSON.stringfy()

### Afficher la date du jour
Date()
toLocalDateString()