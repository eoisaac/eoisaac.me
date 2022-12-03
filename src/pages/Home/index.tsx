import { useKBar } from 'kbar'
import { Button } from '../../components/Button'
import { HeadingContainer, HomePageContainer } from './styles'

export const Home = () => {
  const { query } = useKBar()

  const handleNavigation = () => {
    query.toggle()
  }

  // const isMac = /(Mac)/i.test(navigator.userAgent)
  // const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

  return (
    <HomePageContainer>
      <HeadingContainer>
        <h1>Isaac Santiago</h1>
        <div>
          <strong>Frontend Developer</strong>
          <p>Information Systems student. Programming and technology lover.</p>
        </div>
        <Button onClick={handleNavigation}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start
        </Button>
      </HeadingContainer>
    </HomePageContainer>
  )
}
