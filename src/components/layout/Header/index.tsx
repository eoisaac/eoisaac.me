import { useKBar } from 'kbar'
import { Command } from 'phosphor-react'
import { useEffect, useState } from 'react'
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
        <strong>Isaac Santiago</strong>

        <button onClick={handleNavigation}>
          <Command size={24} color="white" />
        </button>
      </Wrapper>
    </HeaderContainer>
  )
}
