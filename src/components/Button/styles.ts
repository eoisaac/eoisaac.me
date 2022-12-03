import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: max-content;
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: 0 ${({ theme }) => `-${theme.spacing.xs}`};
  white-space: nowrap;
  cursor: pointer;
  white-space: nowrap;
  line-height: 100%;
  font-size: ${(props) => props.theme.text.md};
  font-weight: ${(props) => props.theme.font.medium};
  color: ${(props) => props.theme.color['base-300']};
  transition: all ${(props) => props.theme.duration} ease-in-out;
  border-radius: ${(props) => props.theme.rounded.base};
  background: transparent;

  svg {
    font-size: ${(props) => props.theme.text.lg};
  }

  &:hover {
    color: ${(props) => props.theme.color['base-100']};
    background-color: rgba(255, 255, 255, 0.1);
  }
`
