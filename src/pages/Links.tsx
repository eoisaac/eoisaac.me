import { useTranslation } from 'react-i18next'
import { SocialList } from '../components/SocialList'

export const Links = () => {
  const { t } = useTranslation()

  return (
    <section className="container flex items-center sm:pt-16">
      <figure className="relative mb-4">
        <img
          src="https://avatars.githubusercontent.com/u/79121397?v=4"
          alt="Isaac wearing a blue hoodie picture."
          loading="lazy"
          className="max-h-[8rem] max-w-[8rem] rounded-md object-cover shadow-md
                grayscale-[80%] transition-all duration-200 hover:grayscale-0"
        />
        <figcaption className="sr-only">Isaac Santiago.</figcaption>
      </figure>

      <div className="mb-8 text-center">
        <h2 className="text-xl font-medium">Isaac Santiago</h2>
        <strong className="text-sm font-normal">{t('role')}</strong>
      </div>

      <SocialList column socialLabel displayPortfolioLink />
    </section>
  )
}
