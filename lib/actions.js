"use server";

import nodemailer from "nodemailer";
import { getArtisanParId } from "./artisans";

// Fonction executee cote serveur (Server Action)
export async function envoyerMessageContact(etatPrecedent, formData) {
  // Piege a robots : ce champ est invisible pour un humain (cf ContactForm.js),
  // seul un robot qui remplit tous les champs automatiquement le remplira.
  const piege = formData.get("siteweb2");
  if (piege) {
    return { succes: false, erreur: "Une erreur est survenue." };
  }

  const idArtisan = formData.get("idArtisan");
  const nom = (formData.get("nom") || "").toString().trim();
  const objet = (formData.get("objet") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  // Validation cote serveur : on ne fait jamais confiance aux donnees venant
  // du navigateur, meme si le champ HTML a l'attribut "required".
  if (!nom || !objet || !message) {
    return { succes: false, erreur: "Merci de remplir tous les champs." };
  }
  if (nom.length > 100 || objet.length > 150 || message.length > 3000) {
    return { succes: false, erreur: "Un des champs est trop long." };
  }

  const artisan = await getArtisanParId(idArtisan);

  if (!artisan) {
    return { succes: false, erreur: "Artisan introuvable." };
  }

  try {
    // Envoi via MailDev (serveur mail de test en local)
    const transporteur = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: process.env.SMTP_PORT || 1025,
      secure: false,
    });

    await transporteur.sendMail({
      from: '"Trouve ton artisan" <contact@trouve-ton-artisan.fr>',
      to: artisan.email,
      subject: objet,
      text: `Message de : ${nom}\n\n${message}`,
    });

    return { succes: true, erreur: null };
  } catch (error) {
    return { succes: false, erreur: "Erreur lors de l'envoi du message." };
  }
}
