import { ArrowUUpLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export const NotFound = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div>
        <h1>Page not found!</h1>
        <Link to="/" className="self-start focus:shadow-none">
          <Button label="Return to home" icon={<ArrowUUpLeft />} />
        </Link>
      </div>
    </div>
  )
}
