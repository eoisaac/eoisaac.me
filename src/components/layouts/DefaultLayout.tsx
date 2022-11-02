import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout = () => {
  return (
    <div className="w-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
