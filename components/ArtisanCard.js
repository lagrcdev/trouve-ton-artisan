import Link from "next/link";
import StarRating from "./StarRating";

// Carte d'un artisan (utilisee dans les listes et l'accueil)
export default function ArtisanCard({ artisan }) {
  return (
    <Link href={`/artisans/${artisan.id}`} className="text-decoration-none text-reset">
      <div className="card artisan-card h-100 shadow-sm">
        <div className="card-body">
          <h3 className="h5 fw-bold">{artisan.name}</h3>
          <p className="mb-1">
            <StarRating note={artisan.note} />
          </p>
          <p className="mb-1 text-muted fw-bold">{artisan.specialty}</p>
          <p className="mb-0 text-muted">
            <span aria-hidden="true">📍</span> {artisan.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
