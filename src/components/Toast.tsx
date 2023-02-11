import { CheckCircle, Info, Warning, X, XCircle } from 'phosphor-react'
import { useContext } from 'react'
import { ToastType } from '../@types/toast'
import { ToastContext } from '../contexts/ToastContext'
import { Button } from './Button'

export const Toast = ({
  id,
  heading,
  message,
  variant,
  autoCloseTimeout,
}: ToastType) => {
  const { removeToast } = useContext(ToastContext)

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

  const closeTimeout = setTimeout(() => {
    removeToast(id)
  }, autoCloseTimeout)

  const handleRemoveToast = () => {
    clearTimeout(closeTimeout)
    removeToast(id)
  }

  return (
    <div
      className={`bg-dark firefox:bg-opacity-100 flex w-full max-w-xs
      items-center gap-2 rounded-md border border-b-600 bg-opacity-30 p-2
      shadow-md backdrop-blur-lg backdrop-saturate-150 backdrop-filter
      transition-all duration-200 sm:top-4 sm:right-4`}
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
        onClick={handleRemoveToast}
      />
    </div>
  )
}
