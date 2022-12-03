import styled from 'styled-components'

export const SocialContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};

  li a {
    display: block;
    line-height: 0;
    font-size: ${(props) => props.theme.text.xl};
    color: ${(props) => props.theme.color['base-500']};
  }
`
