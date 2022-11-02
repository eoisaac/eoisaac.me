import { KBarResults, useMatches } from 'kbar'

export const RenderResults = () => {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="text-text-primary bg-base-background">{item}</div>
        ) : (
          <div
            className={`text-text-primary bg-base-background ${
              active ? 'bg-shape-primary' : ''
            }`}
          >
            {item.name}
          </div>
        )
      }
    />
  )
}
