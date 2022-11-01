export const Home = () => {
  return (
    <div className="page">
      <div className="container-screen flex flex-col md:flex-row">
        <main
          className="my-auto h-full sm:h-auto flex flex-col items-start justify-evenly 
        sm:justify-center gap-16"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-lg text-text-secondary">
              Hi, I&apos;m
            </span>
            <h1 className="font-sans text-6xl text-title-primary -indent-1">
              Isaac Santiago
            </h1>
            <strong
              className="font-mono font-normal text-[1.3rem] sm:text-3xl
            text-gradient-blue"
            >
              &gt; Frontend developer
            </strong>
          </div>

          <div className="text-text-secondary flex flex-col justify-start gap-2">
            <div>
              <p>
                Programming and technology lover. I like coffee and JavaScript.
              </p>
              <p>I&apos;m currently learning React and Typescript</p>
            </div>
            <button className="block bg-orange-400">
              <span>Press</span>
              <span>ctrl</span>
              <span>k</span>
              <span>to start</span>
            </button>
          </div>
        </main>
        <aside className="hidden sm:static bg-blue-600">nio</aside>
      </div>
    </div>
  )
}
