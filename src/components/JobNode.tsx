export const JobNode = () => {
  return (
    <li>
      <div className="flex-start relative flex items-center">
        <div
          className="absolute -top-1 -left-[4.5px] flex h-2 w-2 items-center
        justify-center rounded-full bg-gradient-to-r from-cyan-400
        to-emerald-500"
        />
        <h4
          className="ml-3 -mt-3 font-mono text-lg  font-medium text-b-200 
        sm:text-xl"
        >
          Internship at
          <a
            href="https://www.zumpy.com.br/"
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            @Zumpy
          </a>
        </h4>
      </div>
      <div className="ml-6 mb-6">
        <span className="text-sm">Jun 2022 - Present</span>
        <p className="text-text-primary mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </li>
  )
}
