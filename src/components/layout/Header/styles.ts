import styled from 'styled-components'

interface HeaderContainerProps {
  isScrolling: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: all 0.1s;
  background: ${(props) => props.theme.color['base-900']};
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md};
`
