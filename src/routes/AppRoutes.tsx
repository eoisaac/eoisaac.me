import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts/DefaultLayout'
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
