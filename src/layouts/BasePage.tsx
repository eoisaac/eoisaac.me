import { ReactNode } from 'react'

interface BasePageProps {
  heading?: string
  children: ReactNode
  className?: string
}

export const BasePage = ({ heading, children, className }: BasePageProps) => {
  return (
    <section className={`flex flex-1 flex-col gap-4 pt-4 ${className}`}>
      {heading && (
        <h1
          className="bg-gradient-to-r from-cyan-400 to-emerald-500
          bg-clip-text text-3xl font-bold text-transparent drop-shadow-sm
          sm:text-4xl"
        >
          {heading}
        </h1>
      )}
      <div>{children}</div>
    </section>
  )
}