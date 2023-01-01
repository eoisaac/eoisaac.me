import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto">
      <>
        <Header />
        <main
          className="mx-auto flex min-h-0 w-full max-w-2xl flex-1 flex-col p-4
          pt-16 xl:max-w-3xl"
        >
          <Outlet />
        </main>
        <Footer />
      </>
    </div>
  )
}
