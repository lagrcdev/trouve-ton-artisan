import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Trouve ton artisan | Région Auvergne-Rhône-Alpes",
  description:
    "Trouvez facilement un artisan près de chez vous en Auvergne-Rhône-Alpes et contactez-le directement pour vos besoins en bâtiment, services, fabrication ou alimentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
            <body>
        <BootstrapClient />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>

    </html>
  );
}
