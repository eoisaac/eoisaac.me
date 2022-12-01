import styled from 'styled-components'

export const MenuContainer = styled.nav`
  position: absolute;
  inset: 100% 0 auto 0;
  background-color: inherit;
  overflow-x: auto;

  ul {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.md};
    padding: ${(props) =>
      `${props.theme.spacing.xxs} ${props.theme.spacing.md}`};
  }

  @media ${(props) => props.theme.screen.xs} {
    position: initial;

    ul {
      padding: 0;
    }
  }
`
