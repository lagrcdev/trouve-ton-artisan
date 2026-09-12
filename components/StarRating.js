// Affiche la note en etoiles
export default function StarRating({ note }) {
  const noteArrondie = Math.round(parseFloat(note));
  const etoiles = [];

  // Etoile pleine ou vide selon la note arrondie
  for (let i = 1; i <= 5; i++) {
    etoiles.push(i <= noteArrondie ? "★" : "☆");
  }

  return (
    <span className="star-rating" role="img" aria-label={`Note : ${note} sur 5`}>
      {etoiles.join(" ")} ({note})
    </span>
  );
}
