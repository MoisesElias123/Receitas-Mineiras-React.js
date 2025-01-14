import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "./components/Layout/MainLayout";
import { Home, ErrorPage, Recipe, SurpriseRecipe, UnderConstructionPage } from "./pages";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/recipe/0",
          element: <SurpriseRecipe />,
        },
        {
          path: "/login",
          loader: () => redirect("/under-construction"),
        },
        {
          path: "/register",
          loader: () => redirect("/under-construction"),
        },
        {
          path: "/profile",
          loader: () => redirect("/under-construction"),
        },
        {
          path: "/category/:category",
          loader: () => redirect("/under-construction"),
        },
        {
          path: "about",
          loader: () => redirect("/under-construction"),
        },
      ],
    },
    {
      path: "/under-construction",
      element: <UnderConstructionPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
