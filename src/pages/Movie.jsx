
import { useParams, useOutletContext } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const movies = useOutletContext() || [];

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>; // ✅ Graceful fallback

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {Array.isArray(movie.genres) && movie.genres.map((genre) => (
        <span key={genre}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
