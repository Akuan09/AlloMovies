# Allo Movies

### 1 - API (Express)

Créer une API réalisant un CRUD sur toutes les tables de la base de données `movies_db`

### 2 - APP (ReactJs)

Créer un front-end avec ReactJs qui utilise l'API pour effectuer des opérations de Back-Office sur chaques tables de la BDD (3 pages principales) :
- Page Movies `/movies`
- Page Directors `/directors`
- Page Categories `/categories`

Sur chaque page principale, une navbar permet de passer d'une page principale à l'autre

Sur chaque page principale on affiche la liste de tous les enregistrements correspondants
Pour chaque enregistrement (3 boutons) :
- Sous page Détails `/<page>/detail/:id` Affiche les détails d'un enregistrement
- Sous page Editer `/<page>/edit/:id` Permet d'éditer un enregistrement (modification)
- Sous page Supprimer `/<page>/delete/:id` Permet après confirmation de suprimer un enregistrement

Plus sur chaque page principale un bouton :
- Sous page Ajouter  `/<page>/add` Permet d'ajouter un enregistrement

Après chaque validation des sous page on retourne automatiquement à la page principale correspondante
