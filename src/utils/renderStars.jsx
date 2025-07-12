import { FaStar } from "react-icons/fa";

export function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i <= rating ? "text-warning" : "text-secondary"}
      />
    );
  }
  return stars;
}
