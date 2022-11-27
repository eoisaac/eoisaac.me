import styled from 'styled-components'

export const BasePageContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
`

export const PageHeader = styled.div`
  h1 {
    font-size: ${(props) => props.theme.text.xxl};
    font-weight: ${(props) => props.theme.font.medium};
    color: ${(props) => props.theme.color['base-200']};
  }
`

export const PageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`
