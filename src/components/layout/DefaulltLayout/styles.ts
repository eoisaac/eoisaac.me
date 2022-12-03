import styled from 'styled-components'

export const ScreenContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: calc(${(props) => props.theme.spacing.xxl} + 3rem);
  overflow-y: auto;

  @media ${(props) => props.theme.screen.sm} {
    padding-top: ${(props) => props.theme.spacing.xxl};
  }
`

export const PageContainer = styled.main`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
