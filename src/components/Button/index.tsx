import { HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`-m-1 inline-block w-max whitespace-nowrap rounded-lg
    bg-transparent p-1 text-base text-b-300 hover:bg-b-100/10 hover:text-b-100
    ${className}`}
    >
      <span>{children}</span>
    </button>
  )
}
