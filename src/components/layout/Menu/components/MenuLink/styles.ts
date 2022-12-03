import styled from 'styled-components'

export const NavigationItem = styled.li`
  a {
    display: block;
    position: relative;
    padding: ${({ theme }) => theme.spacing.xs};
    margin: 0 ${({ theme }) => `-${theme.spacing.xs}`};
    white-space: nowrap;
    line-height: 100%;
    font-size: ${(props) => props.theme.text.sm};
    color: ${(props) => props.theme.color['base-400']};
    text-transform: uppercase;
    cursor: pointer;
    transition: all ${(props) => props.theme.duration} ease-in-out;
    border-radius: ${(props) => props.theme.rounded.base};

    &:hover {
      color: ${(props) => props.theme.color['base-100']};
      background-color: rgba(255, 255, 255, 0.1);
    }

    &::after {
      content: '';
      height: 1px;
      width: 20px;
      display: block;
      position: absolute;
      inset: 90% 0 auto 0;
      margin: 0 auto;
      opacity: 0;
      background-color: ${(props) => props.theme.color['base-100']};
    }
  }

  a.active {
    color: ${(props) => props.theme.color['base-100']};

    &::after {
      opacity: 1;
    }
  }
`
