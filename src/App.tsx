import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes/AppRoutes'
import { queryClient } from './services/reactQuery/client'
import { GlobalStyle } from './styles/global'
import { DarkTheme } from './styles/themes/dark'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
