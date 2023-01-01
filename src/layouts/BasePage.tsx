import { ReactNode } from 'react'

interface BasePageProps {
  heading?: string
  children: ReactNode
  className?: string
}

export const BasePage = ({ heading, children, className }: BasePageProps) => {
  return (
    <section className={`flex flex-1 flex-col gap-4 ${className}`}>
      {heading && (
        <div>
          <h1>{heading}</h1>
        </div>
      )}
      <div>{children}</div>
    </section>
  )
}
