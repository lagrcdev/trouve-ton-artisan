import { notFound } from "next/navigation";
import { getArtisanParId } from "@/lib/artisans";
import StarRating from "@/components/StarRating";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const artisan = await getArtisanParId(id);
  if (!artisan) return { title: "Artisan introuvable" };
  return {
    title: `${artisan.name} | Trouve ton artisan`,
    description: `${artisan.specialty} à ${artisan.location} - contactez ${artisan.name} directement.`,
  };
}

export default async function FicheArtisan({ params }) {
  const { id } = await params;
  const artisan = await getArtisanParId(id);

  if (!artisan) {
    notFound();
  }

  return (
    <div className="container py-4">
      <div className="text-center">
        <h1 className="fw-bold">{artisan.name}</h1>
        <p className="mb-1">
          <StarRating note={artisan.note} />
        </p>
        <p className="mb-1 text-muted">{artisan.specialty}</p>
        <p className="mb-3 text-muted">📍 {artisan.location}</p>

        {artisan.website && (
          <p>
            <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              🌐 Voir le site web
            </a>
          </p>
        )}
      </div>

      <section className="my-4">
        <h2 className="section-title h5 fw-bold">À propos</h2>
        <p>{artisan.about}</p>
      </section>

      <section className="my-4 text-center">
        <h2 className="section-title h5 fw-bold">Contactez cet artisan</h2>
        <div className="text-start mx-auto" style={{ maxWidth: "500px" }}>
          <ContactForm idArtisan={artisan.id} />
        </div>
      </section>
    </div>
  );
}
