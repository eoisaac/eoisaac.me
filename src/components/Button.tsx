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
  const variants = {
    primary: '',
    secondary: '',
  }

  return (
    <button
      {...rest}
      className={`hover text-title hover:text-accent -m-1 inline-flex w-max
      items-center gap-2 whitespace-nowrap rounded-lg bg-transparent 
      p-1 text-b-100 ${className} ${
        iconLeft ? 'flex-row' : 'flex-row-reverse'
      } ${variants[variant]}`}
    >
      {icon && <div className="text-xl">{icon}</div>}
      <div className={`${srLabel ? 'sr-only' : 'font-medium'}`}>{label}</div>
    </button>
  )
}
