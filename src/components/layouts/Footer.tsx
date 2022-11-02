import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react'

export const Footer = () => {
  const styles = {
    icon: 'block text-text-secondary text-2xl hover:text-accent-green',
  }

  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      className="w-full py-3 border-t border-t-base-lines shadow-md 
    bg-base-background"
    >
      <div
        className="container flex justify-center sm:justify-start 
      items-center px-0"
      >
        <div className="flex gap-2 items-center ">
          <ul className="flex gap-2 items-center ">
            <li>
              <a
                href="https://github.com/eoisaac"
                target="_blank"
                className={styles.icon}
                rel="noreferrer"
              >
                <GithubLogo />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eoisaac"
                target="_blank"
                className={styles.icon}
                rel="noreferrer"
              >
                <LinkedinLogo />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/eoisaacc"
                target="_blank"
                className={styles.icon}
                rel="noreferrer"
              >
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/eoisaacc"
                target="_blank"
                className={styles.icon}
                rel="noreferrer"
              >
                <TwitterLogo />
              </a>
            </li>
          </ul>
          <span className="text-sm text-text-secondary">
            | eoisaac &copy; 2022
          </span>
        </div>
        {/* <button className={styles.icon} onClick={scrollToTop}>
          <CaretUp />
        </button> */}
      </div>
    </footer>
  )
}
