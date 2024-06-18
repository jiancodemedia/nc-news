import "./App.css";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import TopicsPage from "./pages/TopicsPage";
import ArticlesPage from "./pages/ArticlesPage";

function Layout() {
  return (
    <>
      <h1 className="title">NC news</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
        </ul>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

const routersConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "topics",
        element: <TopicsPage />,
      },
      {
        path: "articles",
        element: <ArticlesPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routersConfig);

export default function App() {
  return <RouterProvider router={router} />;
}
