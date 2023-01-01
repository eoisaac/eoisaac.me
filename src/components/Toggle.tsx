import { HTMLAttributes } from 'react'

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  label: string
  srLabel?: boolean
  leftIcon?: JSX.Element
  bodyIcon?: JSX.Element
  toggleIcon?: JSX.Element
}

export const Toggle = ({
  label,
  srLabel,
  bodyIcon,
  toggleIcon,
  ...rest
}: ToggleProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <div
        className="relative flex h-5 w-10 items-center rounded-full
      bg-b-300/30"
      >
        <input type="checkbox" className="peer sr-only" {...rest} />
        <div
          className="absolute grid h-5 w-5 translate-x-full place-items-center
        text-b-500 transition-all duration-150 peer-checked:-translate-x-0"
        >
          <span className="text-b-400">{bodyIcon}</span>
        </div>

        <div
          className="absolute z-10 grid h-full w-5 place-items-center
          rounded-full bg-b-100 transition-all duration-150
          peer-checked:translate-x-full"
        >
          <span className="text-b-dark">{toggleIcon}</span>
        </div>
      </div>
      <div className={`${srLabel ? 'sr-only' : 'text-b-200'}`}>{label}</div>
    </label>
  )
}
