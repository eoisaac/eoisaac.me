import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
