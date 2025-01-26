import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Providers } from './redux/Providers'
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Providers>
      <RouterProvider router={router} />
    </Providers>
)
