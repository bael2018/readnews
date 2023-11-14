import AppLayout from "components/layout/AppLayout";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";

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
      }
    ]
  },
]