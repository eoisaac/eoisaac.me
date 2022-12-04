import { ReactNode } from 'react'

interface BasePageProps {
  children: ReactNode
  heading?: string
}

export const BasePage = ({ children, heading }: BasePageProps) => {
  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      {heading && (
        <div>
          <h1>{heading}</h1>
        </div>
      )}
      <div>{children}</div>
    </section>
  )
}
