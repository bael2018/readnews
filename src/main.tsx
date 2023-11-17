import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store';
import { routes } from 'routes';
import './scss/style.scss'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
