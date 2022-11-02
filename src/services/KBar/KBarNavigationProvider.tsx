import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch
} from 'kbar'
import { EnvelopeSimple, Folder, House, NotePencil, User } from 'phosphor-react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { RenderResults } from './components/RenderResults'

interface KBarNavigationProviderProps {
  children: ReactNode
}

export const KBarNavigationProvider = ({
  children,
}: KBarNavigationProviderProps) => {
  const navigate = useNavigate()

  const actions = [
    {
      id: 'home',
      name: 'Home',
      icon: <House size={32} />,
      shortcut: ['h'],
      keywords: 'home, initial, start, homepage',
      perform: () => navigate('/home'),
    },
    {
      id: 'about',
      name: 'About',
      icon: <User size={32} />,
      shortcut: ['a'],
      keywords: 'about, me, isaac, history',
      perform: () => navigate('/about'),
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: <Folder size={32} />,
      shortcut: ['p'],
      keywords: 'projects, github, work',
      perform: () => navigate('/projects'),
    },
    {
      id: 'posts',
      name: 'Posts',
      icon: <NotePencil size={32} />,
      shortcut: ['b'],
      keywords: 'posts, blog, content, text',
      perform: () => navigate('/posts'),
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: <EnvelopeSimple size={32} />,
      shortcut: ['c'],
      keywords: 'contact, touch',
      perform: () => navigate('/contact'),
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch className="text-base-background" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {children}
    </KBarProvider>
  )
}
