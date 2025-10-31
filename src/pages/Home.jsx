
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";

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