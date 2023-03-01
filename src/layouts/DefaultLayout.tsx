import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="container mt-16">
        <Outlet />
      </main>
    </>
  )
}
