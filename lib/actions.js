"use server";

import nodemailer from "nodemailer";
import { getArtisanParId } from "./artisans";

export async function envoyerMessageContact(etatPrecedent, formData) {
  const idArtisan = formData.get("idArtisan");
  const nom = formData.get("nom");
  const objet = formData.get("objet");
  const message = formData.get("message");

  const artisan = await getArtisanParId(idArtisan);

  if (!artisan) {
    return { succes: false, erreur: "Artisan introuvable." };
  }

  try {
    const transporteur = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: process.env.SMTP_PORT || 1025,
      secure: false,
    });

    await transporteur.sendMail({
      from: '"Trouve ton artisan" <contact@trouve-ton-artisan.fr>',
      to: artisan.email,
      replyTo: nom,
      subject: objet,
      text: `Message de : ${nom}\n\n${message}`,
    });

    return { succes: true, erreur: null };
  } catch (error) {
    return { succes: false, erreur: "Erreur lors de l'envoi du message." };
  }
}
