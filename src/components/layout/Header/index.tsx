import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../../Button'
import { Menu } from '../Menu'

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const handleMenuVisibility = () => {
    setMenuIsVisible((prevState) => !prevState)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between bg-b-900 p-4">
        <Button>iS</Button>

        <Menu isVisible={menuIsVisible} />

        <Button
          onClick={handleMenuVisibility}
          className="relative z-30 sm:hidden"
        >
          {menuIsVisible ? <X /> : <List />}
        </Button>
      </div>
    </header>
  )
}
