import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import "./style.css"

createRoot(document.getElementById('app')!).render(
  <>
    <App />
    <Toaster position="top-right" />
  </>
)
