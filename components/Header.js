import Link from "next/link";
import Image from "next/image";

const categories = ["Bâtiment", "Services", "Fabrication", "Alimentation"];

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-white border-bottom py-1" aria-label="Menu principal">
        <div className="container-fluid px-5">
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo.png"
              alt="Trouve ton artisan - Région Auvergne-Rhône-Alpes"
              width={140}
              height={79}
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-3 mb-md-0">
              {categories.map((categorie) => (
                <li className="nav-item" key={categorie}>
                  <Link
                    href={`/artisans?category=${encodeURIComponent(categorie)}`}
                    className="nav-link text-secondary fw-medium"
                  >
                    {categorie}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid px-5 py-2">
        <form action="/artisans" method="get" role="search" className="w-66 mx-auto">
          <div className="input-group">
            <input
              type="search"
              name="q"
              className="form-control"
              placeholder="Rechercher un artisan, une spécialité, une ville..."
              aria-label="Rechercher un artisan, une spécialité ou une ville"
            />
            <button className="btn btn-outline-primary" type="submit" aria-label="Lancer la recherche">
              🔍
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
