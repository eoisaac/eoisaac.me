import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  errorMessage?: string
  register?: UseFormRegisterReturn<string>
}

export const TextField = ({
  label,
  srLabel = false,
  errorMessage,
  icon,
  register,
  ...rest
}: TextFieldProps) => {
  const hasError = Boolean(errorMessage)
  const hasIcon = Boolean(icon)

  return (
    <label className="group relative my-1 w-full">
      <span
        className={
          srLabel ? 'sr-only' : 'block pl-1 text-left font-medium text-b-400'
        }
      >
        {label}
      </span>
      <div
        className="flex flex-1 items-start gap-2
        overflow-hidden rounded-md border-2 border-b-700 bg-transparent
        shadow-sm group-focus-within:border-m-500"
      >
        {hasIcon && (
          <div
            className="absolute pl-2 pt-2 text-lg text-b-500
          group-focus-within:text-m-400"
          >
            {icon}
          </div>
        )}
        <textarea
          {...register}
          {...rest}
          className={`h-28 max-h-48 w-full bg-transparent px-2 py-1 text-b-200
          placeholder:text-slate-400 focus:shadow-none ${
            hasIcon ? 'pl-8' : ''
          }`}
        />
      </div>
      {hasError && (
        <span className="absolute top-full block pl-1 text-sm text-d-500">
          {errorMessage}
        </span>
      )}
    </label>
  )
}
