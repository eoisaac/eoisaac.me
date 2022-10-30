import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main>
      <div>
        <h1>Oops... Page not found</h1>
        <strong>It seems something went wrong.</strong>
        <Link to="/">Return Home</Link>
      </div>
    </main>
  )
}
