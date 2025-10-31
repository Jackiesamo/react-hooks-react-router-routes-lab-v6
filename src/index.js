
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Actors from "../pages/Actors.jsx";
import Directors from "../pages/Directors.jsx";
import Movie from "../pages/Movie.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

// ✅ Define routes at the top (outside any test)
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

// ✅ Tests
test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/actors"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Actors Page/i)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Directors Page/i)).toBeInTheDocument();
});
test('renders the Movie component on route "/movie/:id"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/movie/1"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument(); // adjust to your Movie output
});

test('renders an error page when given a bad URL', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/bad-route"] });
  render(<RouterProvider router={router} />);
  expect(
    screen.getByText(/Oops! Looks like something went wrong./i)
  ).toBeInTheDocument();
});