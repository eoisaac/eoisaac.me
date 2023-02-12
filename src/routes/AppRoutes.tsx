import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { About } from '../pages/About'
import { Article } from '../pages/Article'
import { Articles } from '../pages/Articles'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Projects } from '../pages/Projects'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:id/:title" element={<Article />} />

        <Route path="*" element={<Navigate to="/404" />} />
      </Route>

      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}
