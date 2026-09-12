import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page introuvable | Trouve ton artisan",
  description: "La page que vous cherchez n'existe pas.",
};

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <Image src="/404.svg" alt="" width={200} height={200} aria-hidden="true" />
      <h1 className="fw-bold text-primary display-3 mt-3">404</h1>
      <p className="text-muted">Oups, cette page n&apos;existe pas.</p>
      <Link href="/" className="btn btn-primary mt-2">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
