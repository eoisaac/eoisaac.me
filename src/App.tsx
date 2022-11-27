import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes/AppRoutes'
import { KBarNavigationProvider } from './services/KBar/KBarNavigationProvider'
import { queryClient } from './services/reactQuery/client'
import { GlobalStyle } from './styles/global'
import { DarkTheme } from './styles/themes/dark'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <KBarNavigationProvider>
            <AppRoutes />
          </KBarNavigationProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
