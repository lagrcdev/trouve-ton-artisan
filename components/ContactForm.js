"use client";

import { useActionState } from "react";
import { envoyerMessageContact } from "@/lib/actions";

const etatInitial = { succes: false, erreur: null };

export default function ContactForm({ idArtisan }) {
  const [etat, action, enCours] = useActionState(envoyerMessageContact, etatInitial);

  return (
    <form action={action}>
      <input type="hidden" name="idArtisan" value={idArtisan} />

      {/* Piege a robots : invisible pour un humain (aria-hidden + hors ecran),
          seul un robot qui remplit tous les champs automatiquement le remplira. */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="siteweb2">Ne pas remplir ce champ</label>
        <input type="text" id="siteweb2" name="siteweb2" tabIndex="-1" autoComplete="off" />
      </div>

      {etat.succes && <p className="text-success">Votre message a bien été envoyé.</p>}
      {etat.erreur && <p className="text-danger">{etat.erreur}</p>}

      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Votre nom
        </label>
        <input type="text" className="form-control" id="nom" name="nom" required />
      </div>
      <div className="mb-3">
        <label htmlFor="objet" className="form-label">
          Objet
        </label>
        <input type="text" className="form-control" id="objet" name="objet" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Votre message
        </label>
        <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary" disabled={enCours}>
          {enCours ? "Envoi en cours..." : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
