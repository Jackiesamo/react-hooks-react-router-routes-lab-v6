
import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = useOutletContext() || []; // ✅ Fallback to empty array

  const movieList = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return (
    <div>
      <h1>Home Page</h1>
      {movieList}
    </div>
  );
}

export default Home;
