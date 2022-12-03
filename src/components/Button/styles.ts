import styled from 'styled-components'

export const ButtonContainer = styled.button`
  all: unset;
  width: max-content;
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.sm}`};
  margin: 0 ${({ theme }) => `-${theme.spacing.sm}`};
  color: ${(props) => props.theme.color['base-100']};
  border-radius: ${(props) => props.theme.rounded.base};
  background: transparent;
`
