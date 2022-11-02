import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { CommandBar } from './components/CommandBar'
import { AppRoutes } from './routes/AppRoutes'
import { queryClient } from './services/reactQuery/client'
import './styles/main.css'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CommandBar>
          <AppRoutes />
        </CommandBar>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
