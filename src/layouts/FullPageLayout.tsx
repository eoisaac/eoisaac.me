import { Outlet } from 'react-router-dom'

export const FullPageLayout = () => {
  return (
    <div
      className="flex min-h-screen max-w-[100vw] flex-col overflow-y-auto 
    bg-b-dark"
    >
      <Outlet />
    </div>
  )
}
