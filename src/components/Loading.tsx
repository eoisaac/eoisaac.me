interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
}

export const Loading = ({ size = 'md' }: LoadingProps) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
  }

  return (
    <div
      className="grid place-items-center flex-1 self-center relative z-30 
    animate-spin"
    >
      <div
        className={`${sizes[size]} rounded-full border-2 border-base-lines 
      border-t-accent-orange`}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
