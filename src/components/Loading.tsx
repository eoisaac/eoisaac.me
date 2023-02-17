export const Loading = () => {
  const dotStyle =
    'w-2 h-2 animate-bounce rounded-sm bg-gradient-to-r from-m-400 to-emerald-500'

  return (
    <div
      className="relative z-30 grid h-full flex-1
    place-items-center self-center"
    >
      <div className="flex space-x-2">
        <div className={`${dotStyle} bounce-dot`} />
        <div className={`${dotStyle} bounce-dot`} />
        <div className={`${dotStyle} bounce-dot`} />
      </div>
    </div>
  )
}
