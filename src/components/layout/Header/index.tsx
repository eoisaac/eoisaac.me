import { List } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../../Button'

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.onscroll = () => setIsScrolling(window.pageYOffset > 0)
  }, [])

  return (
    <header
      className={`fixed top-0 z-20 flex w-full items-center justify-between
      ${
        isScrolling ? 'border-b border-b-700 shadow-md' : 'border-none'
      } bg-b-900 bg-opacity-30 backdrop-blur-lg backdrop-saturate-150
      backdrop-filter`}
    >
      <div className="mx-auto w-full max-w-5xl p-4">
        <Button label="Test" srLabel icon={<List />} />
      </div>
    </header>
  )
}
