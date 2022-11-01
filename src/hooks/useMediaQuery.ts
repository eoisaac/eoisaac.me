import { useEffect, useState } from 'react'

export const useMediaQuery = (rule: string) => {
  const [matchesRule, setMatchesRule] = useState<boolean>(false)
  const media = window.matchMedia(rule)

  useEffect(() => {
    const mediaListener = () => setMatchesRule(media.matches)

    if (media.matches !== matchesRule) setMatchesRule(media.matches)
    media.addEventListener('change', mediaListener)

    return () => media.removeEventListener('change', mediaListener)
  }, [matchesRule, media, rule])

  return matchesRule
}
