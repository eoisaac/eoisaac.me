import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { PageContainer, ScreenContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <ScreenContainer>
      <Header />
      <PageContainer>
        <Outlet />
        <Footer />
      </PageContainer>
    </ScreenContainer>
  )
}
