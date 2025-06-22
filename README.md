# CRM

## Description du projet

Ce projet est une application web de gestion de la relation client (CRM) développée avec Next.js. Elle propose une interface moderne pour gérer votre portefeuille de clients, suivre les indicateurs clés (KPI) et enregistrer les activités commerciales. L’application permet de consulter un tableau de bord, gérer la liste des clients, ajouter de nouveaux clients et visualiser les détails (activités, tags, revenus) de chaque client.

---

## Structure du projet

```
crm/
├── app/
│   ├── layout.tsx                    # Layout racine de l’application
│   ├── page.tsx                      # Page d’accueil / connexion
│   ├── dashboard/
│   │   ├── layout.tsx                # Layout du dashboard (avec sidebar)
│   │   └── page.tsx                  # Page dashboard (KPI, clients récents)
│   ├── clients/
│   │   ├── layout.tsx                # Layout de la section clients (avec sidebar)
│   │   ├── page.tsx                  # Liste des clients + recherche
│   │   ├── new/
│   │   │   └── page.tsx              # Formulaire d’ajout d’un nouveau client
│   │   └── [id]/
│   │       └── page.tsx              # Fiche détaillée d’un client
├── composants/                       # Composants React réutilisables
│   ├── sidebar.tsx
│   ├── ClientCard.tsx
│   └── clients_mini_info.tsx
├── data/
│   └── clients.json                  # Données exemples / mock des clients (toutes les données clients sont stockées ici)
├── public/                           # Fichiers statiques (images, icônes, etc.)
├── styles/                           # Styles globaux (si utilisés)
├── README.md
├── package.json
└── ...
```

> **Remarque :** Toutes les données clients sont sauvegardées et lues depuis le fichier `data/clients.json`.

---

## Fonctionnalités principales

- **Dashboard**
  - Visualisation des KPIs : nombre total de clients, nouveaux clients ce mois-ci, chiffre d’affaires.
  - Vue rapide des derniers clients ajoutés et de leurs activités récentes.
- **Gestion des clients**
  - Liste complète des clients avec recherche.
  - Fiche détaillée pour chaque client (infos, tags, revenus, activités).
  - Ajout rapide de nouveaux clients via un formulaire dédié.
- **Navigation latérale**
  - Accès rapide au dashboard, à la liste des clients et au formulaire d’ajout.
- **Activités & Tags clients**
  - Suivi des activités récentes pour chaque client.
  - Attribution et affichage de tags personnalisés.
- **UI moderne et responsive**
  - Utilisation des dernières fonctionnalités de Next.js et React.
  - Composants stylés et widgets graphiques.
- **Gestion des données**
  - Les données clients sont gérées localement via le fichier `data/clients.json` (pour la démo).

---

## Stack technique

- **Framework Frontend :** Next.js (React 18+)
- **Style :** Tailwind CSS (via styles globaux), police Geist UI
- **Icônes :** Lucide-react (pour dashboard et clients)
- **Langage :** TypeScript

---

## Installation et démarrage

1. **Cloner le projet :**

```bash
git clone https://github.com/larabiislem/CRM.git
cd CRM
```

2. **Installer les dépendances :**

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Lancer le serveur de développement :**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. **Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.**
