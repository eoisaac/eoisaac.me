import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const DefaultLayout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
