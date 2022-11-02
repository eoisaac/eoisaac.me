import { BrowserRouter } from 'react-router-dom'
import { CommandBar } from './components/CommandBar'
import { AppRoutes } from './routes/AppRoutes'
import './styles/main.css'

export const App = () => {
  return (
    <BrowserRouter>
      <CommandBar>
        <AppRoutes />
      </CommandBar>
    </BrowserRouter>
  )
}
