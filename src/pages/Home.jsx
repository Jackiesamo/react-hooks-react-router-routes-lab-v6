
import MovieCard from "../components/MovieCard";
import movies from "../../movies";   // <-- root level

function Home() {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;