import styled from 'styled-components'

export const ScreenContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.spacing.xxl};
  overflow-y: auto;
`

export const PageContainer = styled.main`
  flex: 1;
  min-height: 0;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
