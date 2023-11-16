import AppLayout from "components/layout/AppLayout";
import CategoryPage from "pages/CategoryPage";
import SearchPage from "pages/SearchPage";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import NewsPage from "pages/NewsPage";

export const routes = [
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      },
      {
        path: 'search',
        element: <SearchPage/>
      },
      {
        path: 'category/:title',
        element: <CategoryPage/>
      },
      {
        path: 'news/:id',
        element: <NewsPage/>
      }
    ]
  },
]