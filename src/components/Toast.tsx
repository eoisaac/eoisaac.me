import { useState } from 'react'

import { CheckCircle, Info, Warning, X, XCircle } from 'phosphor-react'
import { Button } from './Button'

interface ToastProps {
  display: boolean
  heading: string
  message?: string
  variant?: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO'
}

export const Toast = ({
  display,
  heading,
  message = '',
  variant = 'INFO',
}: ToastProps) => {
  const [displayToast, setDisplay] = useState(false)

  const variants = {
    SUCCESS: {
      icon: <CheckCircle />,
      color: 'text-s-500',
    },
    WARNING: {
      icon: <Warning />,
      color: 'text-w-400',
    },
    ERROR: {
      icon: <XCircle />,
      color: 'text-d-500',
    },
    INFO: {
      icon: <Info />,
      color: 'text-b-300',
    },
  }
  const color = variants[variant].color
  const icon = variants[variant].icon

  const handleDisplay = () => {
    setDisplay((prevState) => !prevState)
  }

  return (
    <div
      className={`bg-dark firefox:bg-opacity-100 fixed top-0 right-0 z-50 flex
      w-full max-w-sm items-center gap-2 rounded-md border border-b-600
      bg-opacity-30 p-2 shadow-md backdrop-blur-lg backdrop-saturate-150
      backdrop-filter transition-all duration-200 sm:top-4 sm:right-4
      ${display ? '-translate-x-0' : 'translate-x-full sm:right-0'}`}
    >
      <div className={`text-2xl ${color}`}>{icon}</div>
      <div className="flex-1">
        <strong className={`text-b-200 ${color}`}>{heading}</strong>
        <p className="text-sm">{message}</p>
      </div>
      <Button
        label="Close"
        srLabel
        icon={<X weight="bold" />}
        className="self-start pl-1"
        onClick={handleDisplay}
      />
    </div>
  )
}
