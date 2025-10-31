
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`} className="view-info">
        View Info
      </Link>
    </article>
  );
}

export default MovieCard;