export const Loading = () => {
  return (
    <div
      className="relative z-30 grid flex-1 animate-spin place-items-center 
    self-center"
    >
      <div
        className="h-11 w-11 rounded-full border-4 border-b-700/50
      border-t-m-600"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
