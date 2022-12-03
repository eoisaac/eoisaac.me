import { useKBar } from 'kbar'
import { Command } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../../Button'
import { Menu } from '../Menu'
import { HeaderContainer, Wrapper } from './styles'

export const Header = () => {
  const [isSrolling, setIsSrolling] = useState(false)

  useEffect(() => {
    window.onscroll = () => setIsSrolling(window.pageYOffset > 0)
  }, [])

  const { query } = useKBar()
  const handleNavigation = () => {
    query.toggle()
  }

  return (
    <HeaderContainer isScrolling={isSrolling}>
      <Wrapper>
        <Button>is</Button>

        <Menu />
        <Button onClick={handleNavigation}>
          <Command color="white" />
        </Button>
      </Wrapper>
    </HeaderContainer>
  )
}
