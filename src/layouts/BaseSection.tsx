import { ReactNode } from 'react'

interface BaseSectionProps {
  heading?: string
  srHeading?: boolean
  children: ReactNode
  className?: string
}

export const BaseSection = ({
  heading,
  srHeading,
  children,
  className,
}: BaseSectionProps) => {
  return (
    <section className={`flex flex-1 flex-col gap-4 pt-4 ${className}`}>
      {heading && (
        <h2
          className={`${
            srHeading
              ? 'sr-only'
              : 'text-2xl font-bold text-b-100 drop-shadow-sm'
          }`}
        >
          {heading}
        </h2>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  )
}
