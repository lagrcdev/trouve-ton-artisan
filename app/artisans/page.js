import { getArtisansParCategorie, rechercherArtisans, getTousLesArtisans } from "@/lib/artisans";
import ArtisanCard from "@/components/ArtisanCard";

export const metadata = {
  title: "Liste des artisans | Trouve ton artisan",
  description: "Consultez la liste des artisans de la région Auvergne-Rhône-Alpes par catégorie ou recherche.",
};

// Page liste des artisans : par categorie ou par recherche selon l'url
export default async function ListeArtisans({ searchParams }) {
  const params = await searchParams;
  const categorie = params?.category;
  const recherche = params?.q;

  let artisans = [];
  let titre = "Tous les artisans";

  if (recherche) {
    artisans = await rechercherArtisans(recherche);
    titre = `Résultats pour "${recherche}"`;
  } else if (categorie) {
    artisans = await getArtisansParCategorie(categorie);
    titre = categorie;
  } else {
    artisans = await getTousLesArtisans();
  }

  return (
    <div className="container py-4">
      <h1 className="section-title h4 fw-bold">{titre}</h1>

      {artisans.length === 0 ? (
        <p>Aucun artisan ne correspond à votre recherche.</p>
      ) : (
        <div>
          <h2 className="visually-hidden">Liste des artisans</h2>
          <div className="row g-3">
            {artisans.map((artisan) => (
              <div className="col-12 col-md-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
