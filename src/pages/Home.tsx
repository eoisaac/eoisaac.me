export const Home = () => {
  return (
    <div className="container-screen flex flex-col md:flex-row gap-8 relative">
      <main
        className="flex-1 flex flex-col items-start justify-evenly 
        sm:justify-center gap-14 relative z-30"
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

        <div
          className="text-text-secondary flex flex-col justify-start 
          items-start gap-4"
        >
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
      <aside
        className="flex-1 hidden md:flex flex-col items-start justify-evenly 
        sm:justify-center gap-14"
      >
        <p className="text-text-secondary opacity-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at,
          sapiente eveniet sunt minima saepe illum mollitia veniam molestias
          inventore tempora, debitis assumenda sed recusandae eos. Rerum
          blanditiis eum odio.
        </p>
      </aside>
      <div
        className="absolute top-16 sm:top-32 right-16 sm:right-64 w-72 h-72 
        bg-gradient-blue rounded-full filter blur-[96px] bg-opacity-50 z-10"
      />
      <div
        className="absolute bottom-16 sm:bottom-32 right-0 sm:right-16 w-72 h-72 
        bg-gradient-green rounded-full filter blur-[96px] bg-opacity-50 z-10"
      />
    </div>
  )
}
