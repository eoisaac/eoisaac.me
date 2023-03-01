import { ArrowUUpLeft } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="container flex items-center justify-center">
      <article className="flex flex-col items-center justify-center gap-2">
        <header className="flex flex-wrap items-end justify-center gap-2">
          <strong
            className="first-letter: bg-gradient-to-r from-m-400
              to-emerald-500 bg-clip-text text-3xl leading-9 text-transparent
              drop-shadow-sm sm:text-4xl sm:leading-10 md:text-5xl"
          >
            404
          </strong>
          <h1
            className="md:leading-14 text-center text-2xl font-extrabold
              tracking-tight text-b-100 drop-shadow-sm sm:text-3xl"
          >
            {t('not_found_heading')}
          </h1>
        </header>
        <p className="max-w-sm text-center">{t('not_found_message')}</p>
        <Link to="/" className="self-center focus:shadow-none">
          <Button label={t('not_found_button')!} icon={<ArrowUUpLeft />} />
        </Link>
      </article>
    </div>
  )
}
