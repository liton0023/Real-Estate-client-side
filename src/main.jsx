
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router'
import './index.css'
import { store } from './redax/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       <RouterProvider router={router} />
  </Provider>,
)
