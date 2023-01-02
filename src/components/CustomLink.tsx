import { ArrowSquareOut } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface CustomLinkProps {
  label: string
  href: string
  type?: 'intern' | 'external'
  target?: '_blank' | '_parent' | '_self' | '_top'
  title?: string
  icon?: boolean
}

export const CustomLink = ({
  label,
  href,
  type = 'intern',
  target = '_blank',
  title,
  icon = false,
}: CustomLinkProps) => {
  const style = `relative inline-flex items-center pb-[2px] leading-none
  text-b-50 before:absolute before:bottom-0 before:left-0 before:block
  before:h-[1px] before:w-full before:origin-top-left before:scale-x-0
  before:bg-b-300 before:transition before:duration-200 before:ease-in-out
  before:content-[''] hover:text-b-300 before:hover:scale-x-100`

  const types = {
    intern: (
      <Link to={href} target={target} className={style} title={title}>
        <span>{label}</span>
        {icon && (
          <span className="text-base">
            <ArrowSquareOut />
          </span>
        )}
      </Link>
    ),
    external: (
      <a href={href} target={target} className={style} title={title}>
        <span>{label}</span>
        {icon && (
          <span className="text-base">
            <ArrowSquareOut />
          </span>
        )}
      </a>
    ),
  }

  return (
    <>
      &nbsp;
      {types[type]}
      &nbsp;
    </>
  )
}
