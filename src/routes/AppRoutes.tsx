import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}></Route>
      <Route path="*" element={<></>} />
    </Routes>
  )
}
