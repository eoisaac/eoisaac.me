import { CaretUp } from 'phosphor-react'
import { Social } from '../../Social'
import { FooterContainer } from './styles'

export const Footer = () => {
  const handleNavigateToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterContainer>
      <Social />
      <button onClick={handleNavigateToTop}>
        <CaretUp />
      </button>
    </FooterContainer>
  )
}
