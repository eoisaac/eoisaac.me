import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

export const DefaultLayout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <Outlet />
    </div>
  )
}
