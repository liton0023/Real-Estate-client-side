
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { router } from './Routers/Router'
import './index.css'
import { persistor, store } from './redax/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <RouterProvider router={router} />
     </PersistGate> 
  </Provider>,
)
