import styled from 'styled-components'

export const NavigationItem = styled.li`
  a {
    font-size: ${(props) => props.theme.text.md};
    color: ${(props) => props.theme.color['base-400']};

    &:hover {
      color: ${(props) => props.theme.color['brand-500']};
    }
  }

  a.active {
    color: ${(props) => props.theme.color['base-100']};
  }
`
