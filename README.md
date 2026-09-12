# Trouve ton artisan

Site pour trouver un artisan en région Auvergne-Rhône-Alpes, fait avec Next.js et Bootstrap.

## Prérequis

- Node.js (version 18 ou plus)
- npm

## Installation

```bash
npm install
```

## Lancer le site en local

```bash
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Envoi des messages de contact (optionnel)

Le formulaire de contact envoie les emails via MailDev, un faux serveur mail pour tester en local (aucun vrai email n'est envoyé).

Dans un autre terminal :

```bash
npm run mail
```

Puis ouvrir [http://localhost:1080](http://localhost:1080) pour voir les emails reçus.

## Build de production

```bash
npm run build
npm run start
```
