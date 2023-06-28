import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <div>Sign Up</div>
  },
  {
    path: '/',
    element: <div>home</div>
  },
  {
    path: '*',
    element: <div>404</div>
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
