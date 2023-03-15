import autoAnimate from '@formkit/auto-animate'
import { ReactNode, createContext, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ToastBase, ToastType } from '../@types/toast'
import { Toast } from '../components/Toast'

interface ToastContextType {
  newToast: ({ heading, message, variant }: ToastBase) => void
  removeToast: (id: string) => void
}

interface ToastContextProviderProps {
  children: ReactNode
}

export const ToastContext = createContext({} as ToastContextType)

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toastList, setToastList] = useState<ToastType[]>([])

  const toastListRef = useRef(null)

  useEffect(() => {
    toastListRef.current && autoAnimate(toastListRef.current)
  }, [toastListRef])

  const newToast = ({
    heading = '',
    message,
    variant = 'INFO',
    autoCloseTimeout = 3000,
  }: ToastBase) => {
    setToastList((prevState) => [
      {
        id: uuidv4(),
        heading,
        message,
        display: true,
        variant,
        autoCloseTimeout,
      },
      ...prevState,
    ])
  }

  const removeToast = (id: string) => {
    const updatedToastList = toastList.filter((toast) => toast.id !== id)
    setToastList(updatedToastList)
  }

  return (
    <ToastContext.Provider
      value={{
        newToast,
        removeToast,
      }}
    >
      <ul
        ref={toastListRef}
        className="fixed z-[9999] flex w-full max-w-xs flex-col gap-1 sm:right-4 
      sm:top-4 sm:gap-4"
      >
        {toastList.map(
          ({ id, heading, message, variant, autoCloseTimeout }) => {
            return (
              <Toast
                key={id}
                id={id}
                heading={heading}
                message={message}
                variant={variant}
                autoCloseTimeout={autoCloseTimeout}
              />
            )
          },
        )}
      </ul>

      {children}
    </ToastContext.Provider>
  )
}
