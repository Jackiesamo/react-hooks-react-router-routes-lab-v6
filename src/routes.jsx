
// src/routes.jsx
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Actors from "./pages/Actors.jsx";
import Directors from "./pages/Directors.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
];

export default routes;