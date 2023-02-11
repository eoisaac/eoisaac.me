export interface ToastBase {
  heading?: string
  message: string
  variant?: 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO'
}

export interface ToastType extends ToastBase {
  id: string
  display: boolean
}
