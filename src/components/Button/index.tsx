import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  iconLeft?: boolean
  variant?: 'primary'
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  label,
  srLabel,
  icon,
  iconLeft = false,
  variant = 'primary',
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`-m-1 inline-block w-max whitespace-nowrap rounded-lg
    bg-transparent p-1 text-base text-b-300 hover:bg-b-100/10 hover:text-b-100
    ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span className={`${srLabel ? 'sr-only' : ''}`}>{label}</span>
    </button>
  )
}
