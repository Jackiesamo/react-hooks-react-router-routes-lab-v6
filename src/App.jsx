
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"],
    },
  ]);

  return (
    <>
      <NavBar />
      <Outlet context={movies} /> {/* ✅ provide movies to children */}
    </>
  );
}

export default App;
