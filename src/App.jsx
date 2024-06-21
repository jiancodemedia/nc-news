import "./App.css";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import TopicsPage from "./pages/TopicsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import TopicDetailPage from "./pages/TopicDetailPage"

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "users", element: <UsersPage /> },
      { path: "topics", element: <TopicsPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: 'articles/:articleId', element: <ArticleDetailPage/>},
      { path: 'topics/:topicSlug', element: <TopicDetailPage/>}
    ],
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
) ;
}
export default App;
