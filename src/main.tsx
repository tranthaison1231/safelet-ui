import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './style.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

createRoot(document.getElementById('app')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <Toaster position="bottom-left" />
    {/* <ReactQueryDevtools initialIsOpen /> */}
  </QueryClientProvider>
)
