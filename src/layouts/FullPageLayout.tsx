import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const FullPageLayout = () => {
  return (
    <div
      className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto 
    bg-b-dark"
    >
      <Outlet />
      <Footer />
    </div>
  )
}
