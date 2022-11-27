import { KBarResults, useMatches } from 'kbar'

export const RenderResults = () => {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? <div>{item}</div> : <div>{item.name}</div>
      }
    />
  )
}
