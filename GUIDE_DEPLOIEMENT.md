# Guide rapide de déploiement

## 1. Lancer le site en local

Prérequis : Node.js 22 ou une version plus récente.

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:3000`.

## 2. Vérifier la version de production

```bash
npm run build
```

Le déploiement ne doit être lancé que si cette commande se termine sans erreur.

## 3. Enregistrer le projet sur GitHub

Créer d’abord un dépôt GitHub vide, sans fichier README ni licence, puis exécuter :

```bash
git init
git add .
git commit -m "Version initiale du site David Frotiée"
git branch -M main
git remote add origin URL_DU_DEPOT_GITHUB
git push -u origin main
```

Remplacer `URL_DU_DEPOT_GITHUB` par l’adresse fournie par GitHub.

## 4. Publier avec Sites

Le projet est déjà associé à son hébergement grâce au fichier
`.openai/hosting.json`. Depuis Codex, ouvrir ce dossier puis demander la
publication de la dernière version sur le site existant. Conserver le même
`project_id` et l’accès public actuel.

## À ne pas versionner

Ne jamais ajouter au dépôt de mot de passe, jeton GitHub, clé d’API ou secret
d’hébergement. Les dossiers `node_modules`, `dist` et les fichiers locaux
temporaires sont volontairement absents de l’archive.
