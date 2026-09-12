import fs from "fs/promises";
import path from "path";

// Lit le fichier datas.json fourni
async function lireArtisans() {
  const cheminFichier = path.join(process.cwd(), "public", "datas.json");
  const contenu = await fs.readFile(cheminFichier, "utf-8");
  return JSON.parse(contenu);
}

// Tous les artisans
export async function getTousLesArtisans() {
  return lireArtisans();
}

// Artisans d'une categorie (ex: "Bâtiment")
export async function getArtisansParCategorie(categorie) {
  const artisans = await lireArtisans();
  return artisans.filter((artisan) => artisan.category === categorie);
}

// Artisans du mois (champ "top" a true dans datas.json)
export async function getArtisansDuMois() {
  const artisans = await lireArtisans();
  return artisans.filter((artisan) => artisan.top === true);
}

// Un artisan par son id (page fiche artisan)
export async function getArtisanParId(id) {
  const artisans = await lireArtisans();
  return artisans.find((artisan) => artisan.id === id);
}

// Recherche dans le nom, la specialite et la ville
export async function rechercherArtisans(recherche) {
  const artisans = await lireArtisans();
  const terme = recherche.toLowerCase();
  return artisans.filter((artisan) => {
    return (
      artisan.name.toLowerCase().includes(terme) ||
      artisan.specialty.toLowerCase().includes(terme) ||
      artisan.location.toLowerCase().includes(terme)
    );
  });
}
