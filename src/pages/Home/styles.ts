import styled from 'styled-components'
import { BasePage } from '../../components/layout/BasePage'
// import { BasePageContainer } from '../../components/layout/BasePage/styles'

export const HomePageContainer = styled(BasePage)``

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  margin: auto 0;
  padding-bottom: ${(props) => props.theme.spacing.xxl};

  h1 {
    color: ${(props) => props.theme.color['base-100']};
    font-size: clamp(30px, 8vw, 50px);
    font-weight: ${(props) => props.theme.font.bold};
  }

  strong {
    color: ${(props) => props.theme.color['base-300']};
    font-size: ${(props) => props.theme.text.lg};
    font-weight: ${(props) => props.theme.font.medium};
  }

  p {
    font-weight: ${(props) => props.theme.font.regular};
  }
`
