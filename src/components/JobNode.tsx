import { Job } from '../@types/app'
import { CustomLink } from './CustomLink'

interface JobNodeProps {
  job: Job
}

export const JobNode = ({ job }: JobNodeProps) => {
  const { role, company, start, end } = job
  const { name, place, link } = company

  return (
    <li className="flex flex-col">
      <h3 className="text-lg font-medium text-b-200 sm:text-xl">{role}</h3>
      <div>
        {link ? (
          <CustomLink
            href={link}
            type="external"
            target="_blank"
            label={name}
            icon={false}
          />
        ) : (
          <span>{name}</span>
        )}
        <span> | </span>
        <span>{place}</span>
      </div>
      <div className="text-sm">
        <span>{start}</span>
        <span> - </span>
        <span>{end}</span>
      </div>
    </li>
  )
}
