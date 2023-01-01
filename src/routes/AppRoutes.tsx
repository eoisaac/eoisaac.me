import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { About } from '../pages/About'
import { Home } from '../pages/Home'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Posts', href: '/posts' },
  { label: 'Contact', href: '/contact' },
]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
