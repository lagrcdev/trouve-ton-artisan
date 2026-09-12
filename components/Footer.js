import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <address className="mb-0">
          101 cours Charlemagne
          <br />
          CS 20033
          <br />
          69269 LYON CEDEX 02
          <br />
          France
          <br />
          <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
        </address>
        {/* Liens des pages legales */}
        <nav aria-label="Liens légaux">
          <ul className="list-unstyled mb-0">
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/donnees-personnelles">Données personnelles</Link>
            </li>
            <li>
              <Link href="/accessibilite">Accessibilité</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
