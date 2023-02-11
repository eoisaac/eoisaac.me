export interface ToastBase {
  heading?: string
  message: string
  variant?: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO'
  autoCloseTimeout?: number
}

export interface ToastType extends ToastBase {
  id: string
  heading: string
  message: string
  variant: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO'
  autoCloseTimeout: number
}
