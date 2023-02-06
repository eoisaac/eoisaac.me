import { X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { Button } from './Button'

interface PopoverProps {
  label: string
  srLabel?: boolean
  icon: JSX.Element
  children: ReactNode
}

export const Popover = ({
  label,
  srLabel = true,
  icon,
  children,
}: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleIsVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <div className="relative">
      <Button
        label={label}
        icon={isVisible && icon ? <X weight="bold" /> : icon}
        srLabel={srLabel}
        onClick={handleIsVisible}
      />

      <article
        className={`${
          isVisible
            ? 'not-sr-only pointer-events-auto opacity-100'
            : 'sr-only pointer-events-none opacity-0'
        } bg-dark firefox:bg-opacity-100 absolute bottom-full -right-1 mb-2
        w-max rounded-md border border-b-600 bg-opacity-30 p-2 shadow-md
        backdrop-blur-lg backdrop-saturate-150 backdrop-filter transition-all
        duration-200`}
      >
        {children}
      </article>
    </div>
  )
}
