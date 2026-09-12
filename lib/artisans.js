import fs from "fs/promises";
import path from "path";

async function lireArtisans() {
  const cheminFichier = path.join(process.cwd(), "public", "datas.json");
  const contenu = await fs.readFile(cheminFichier, "utf-8");
  return JSON.parse(contenu);
}

export async function getTousLesArtisans() {
  return lireArtisans();
}

export async function getArtisansParCategorie(categorie) {
  const artisans = await lireArtisans();
  return artisans.filter((artisan) => artisan.category === categorie);
}

export async function getArtisansDuMois() {
  const artisans = await lireArtisans();
  return artisans.filter((artisan) => artisan.top === true);
}

export async function getArtisanParId(id) {
  const artisans = await lireArtisans();
  return artisans.find((artisan) => artisan.id === id);
}

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
