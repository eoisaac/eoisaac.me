import { PaperPlaneRight } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { BasePage } from '../layouts/BasePage'

export const Home = () => {
  return (
    <BasePage>
      <div className="my-auto flex flex-col gap-4">
        <div>
          <h1
            className="md:leading-14 text-3xl font-extrabold leading-9
          tracking-tight text-b-100 drop-shadow-sm sm:text-4xl
          sm:leading-10 md:text-5xl"
          >
            Isaac Santiago
          </h1>
          <strong
            className="bg-gradient-to-r from-m-400 to-emerald-500 bg-clip-text
            text-2xl text-transparent drop-shadow-sm sm:text-3xl"
          >
            Fullstack developer
          </strong>
        </div>

        <div>
          <p>Programming and technology lover. I like coffee and JavaScript.</p>
          <p>I&apos;m currently learning React and Typescript.</p>
        </div>

        <Link to="/contact" className="self-start focus:shadow-none">
          <Button
            label="Get in touch"
            icon={<PaperPlaneRight weight="bold" />}
          />
        </Link>
      </div>
    </BasePage>
  )
}
