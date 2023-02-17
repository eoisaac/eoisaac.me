import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { FullPageLayout } from '../layouts/FullPageLayout'
import { About } from '../pages/About'
import { Article } from '../pages/Article'
import { Articles } from '../pages/Articles'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Links } from '../pages/Links'
import { NotFound } from '../pages/NotFound'
import { Projects } from '../pages/Projects'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FullPageLayout />}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id/:title" element={<Article />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/links" element={<Links />} />
      </Route>
    </Routes>
  )
}
