import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import './services/i18n/i18n'
import { queryClient } from './services/reactQuery/client'
import './styles/main.css'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
