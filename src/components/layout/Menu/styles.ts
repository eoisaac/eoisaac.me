import styled from 'styled-components'

export const MenuContainer = styled.nav`
  position: absolute;
  inset: 100% 0 auto 0;
  overflow-x: auto;
  padding: 2px ${({ theme }) => `calc(${theme.spacing.xs} + 2px)`};
  margin: 0 auto;
  background-color: ${(props) => props.theme.color['base-900']};

  ul {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.xs};
  }

  @media ${(props) => props.theme.screen.sm} {
    position: initial;

    ul {
      padding: 0;
    }
  }
`
