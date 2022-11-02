import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { KBarNavigationProvider } from './services/KBar/KBarNavigationProvider'
import './styles/main.css'

export const App = () => {
  return (
    <BrowserRouter>
      <KBarNavigationProvider>
        <AppRoutes />
      </KBarNavigationProvider>
    </BrowserRouter>
  )
}
