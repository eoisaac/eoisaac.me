import { ReactNode, createContext, useState } from 'react'
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

  const newToast = ({ heading = '', message, variant = 'INFO' }: ToastBase) => {
    setToastList((prevState) => [
      {
        id: uuidv4(),
        heading,
        message,
        display: true,
        variant,
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
        className="fixed right-0 top-0 z-40 flex max-w-xs flex-col gap-1 
      sm:gap-4 sm:p-4"
      >
        {toastList.map(({ id, heading, message, variant }) => {
          return (
            <Toast
              key={id}
              id={id}
              heading={heading}
              message={message}
              variant={variant}
              display={true}
            />
          )
        })}
      </ul>

      {children}
    </ToastContext.Provider>
  )
}
