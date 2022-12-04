import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto">
      <Header />
      <main className="flex-1flex-col my-0 mx-auto flex min-h-0 w-full max-w-5xl">
        <Outlet />
      </main>
    </div>
  )
}
