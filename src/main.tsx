import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from 'constants/routes';
import ReactDOM from 'react-dom/client'
import './scss/style.scss'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
