import { CaretUp } from 'phosphor-react'
import { Button } from '../../Button'
import { Social } from '../../Social'
import { FooterContainer } from './styles'

export const Footer = () => {
  const handleNavigateToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterContainer>
      <Social />
      <Button onClick={handleNavigateToTop}>
        <CaretUp />
      </Button>
    </FooterContainer>
  )
}
