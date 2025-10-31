
import { useParams } from "react-router-dom";
import movies from "../../movies";   // <-- root level

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time} minutes</p>
        <div>
          {movie.genres.map((g, i) => (
            <span key={i}>{g}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;