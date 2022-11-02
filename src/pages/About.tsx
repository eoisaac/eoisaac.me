export const About = () => {
  const getMyCurrentAge = () => {
    const birthDate = new Date(2001, 2, 21, 1, 45).getTime()
    const ageYearDiff = new Date(Date.now() - birthDate).getFullYear()

    return ageYearDiff - 1970 // 1970 -> Unix Timestamp
  }

  const currentAge = getMyCurrentAge()

  return (
    <main className="container-screen section">
      <h1 className="title">About me</h1>

      <div
        className="flex flex-col md:flex-row items-center md:items-start 
        justify-start gap-4 md:gap-16"
      >
        <img
          src="https://github.com/eoisaac.png"
          alt="Isaac's picture"
          loading="lazy"
          className="w-80 max-h-80 rounded-lg"
        />

        <section className="section">
          <h2 className="sr-only">Bio</h2>
          <p>
            Meu nome é Isaac Santiago Gomes Pereira, tenho
            <span> {currentAge}</span> anos e nasciem Ouro Branco, MG.
            Atualmente estou estudando sobre desenvolvimento Front-End e
            cursando Sistemas de Informação.
          </p>
          <p>
            Ao concluir ensino médio, entrei na faculdade de Engenharia de
            Bioprocessos na UFSJ, onde tive meu primeiro contato com programação
            durante a matéria de Algoritmos e Estrutura de Dados, na qual
            aprendi o básico da linguagem C. A partir dai, decidi que queria
            seguir na carreira de programação.
          </p>
          <p>
            Por acaso, procurando lives na Twitch, encontrei o canal do
            <a
              href="https://www.twitch.tv/marcobrunodev"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Marco Bruno
            </a>
            e comecei a segui-lo. Ele estava desenvolvendo uma plataforma de
            cursos, a FiredLabs, que possui um curso básico sobre HTML e CSS, no
            qual o projeto era desenvolver um site portfólio. Após terminar esse
            curso, comecei a me interessar mais por desenvolver sites, e, desde
            então, venho estudando JavaScript, HTML e CSS, e, tenho como
            objetivo aprender React e Node futuramente.
          </p>
        </section>
      </div>
      <section className="section">
        <h2 className="subtitle">Technologies</h2>
      </section>

      <section className="section">
        <h2 className="subtitle">Where I&apos;ve Worked</h2>

        <ol className="border-l-[1px] border-base-lines mt-1">
          <li>
            <div className="flex flex-start items-center relative">
              <div
                className="bg-base-lines w-2 h-2 flex items-center absolute
              justify-center rounded-full -top-1 -left-1"
              />
              <h4
                className="font-mono text-text-accent font-medium text-lg 
                sm:text-xl ml-3 -mt-3"
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center relative">
              <div
                className="bg-base-lines w-2 h-2 flex items-center absolute
              justify-center rounded-full -top-1 -left-1"
              />
              <h4
                className="font-mono text-text-accent font-medium text-lg 
                sm:text-xl ml-3 -mt-3"
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-start items-center relative">
              <div
                className="bg-base-lines w-2 h-2 flex items-center absolute
              justify-center rounded-full -top-1 -left-1"
              />
              <h4
                className="font-mono text-text-accent font-medium text-lg 
                sm:text-xl ml-3 -mt-3"
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  )
}
