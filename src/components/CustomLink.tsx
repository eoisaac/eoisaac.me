import { ArrowSquareOut } from 'phosphor-react'
import { HTMLAttributes } from 'react'

interface CustomLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  label: string
  href: string
  type?: 'intern' | 'navigation' | 'external'
  target?: '_blank' | '_parent' | '_self' | '_top'
  icon?: boolean
}

export const CustomLink = ({
  label,
  href,
  type = 'intern',
  target = '_blank',
  icon = true,
  ...rest
}: CustomLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className="hover inline-flex items-center whitespace-nowrap text-m-400
      underline"
      rel="noreferrer"
      {...rest}
    >
      <span>{label}</span>
      {icon && (
        <span className="text-base">
          <ArrowSquareOut />
        </span>
      )}
    </a>
  )
}
