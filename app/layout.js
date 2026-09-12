// CSS de Bootstrap + notre fichier de style
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

// Titre et description du site pour le SEO
export const metadata = {
  title: "Trouve ton artisan | Région Auvergne-Rhône-Alpes",
  description:
    "Trouvez facilement un artisan près de chez vous en Auvergne-Rhône-Alpes et contactez-le directement pour vos besoins en bâtiment, services, fabrication ou alimentation.",
};

// Header et footer affiches sur toutes les pages
export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        {/* Lien pour aller directement au contenu (accessibilite) */}
        <a href="#contenu-principal" className="visually-hidden-focusable">
          Aller au contenu principal
        </a>
        <BootstrapClient />
        <Header />
        <main id="contenu-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
