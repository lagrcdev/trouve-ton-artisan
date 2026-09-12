import { getArtisansDuMois } from "@/lib/artisans";
import ArtisanCard from "@/components/ArtisanCard";

// Etapes affichees sur l'accueil
const etapes = [
  { numero: 1, texte: "Choisissez une catégorie dans le menu" },
  { numero: 2, texte: "Sélectionnez un artisan" },
  { numero: 3, texte: "Contactez-le via le formulaire de contact (réponse sous 48h)" },
];

// Page d'accueil
export default async function Home() {
  const artisansDuMois = await getArtisansDuMois();

  return (
    <div className="container py-4">
      <h1 className="visually-hidden">Trouve ton artisan en Auvergne-Rhône-Alpes</h1>

      <section className="mb-5">
        <h2 className="section-title h4 fw-bold">Comment trouver mon artisan ?</h2>
        <ol className="list-unstyled ps-5">
          {etapes.map((etape) => (
            <li key={etape.numero} className="d-flex align-items-center mb-3">
              <span className="fw-bold text-primary fs-3 me-3">{etape.numero}</span>
              <span>{etape.texte}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="section-title h4 fw-bold">Nos artisans du mois</h2>
        <div className="row g-3">
          {artisansDuMois.map((artisan) => (
            <div className="col-12 col-md-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
