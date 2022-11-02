import { GitFork, Star } from 'phosphor-react'
import { Project } from '../@types/app'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const normalizedName = project.name.replace(/_/g, ' ')

  const homepageHostname = project.homepage.replace('https://', '')

  // <i className={`devicon-${project.language.toLowerCase()}-plain`} />
  // https://icon.horse/icon/

  return (
    <li>
      <article
        className="bg-shape-primary border-[1px] border-base-lines 
      rounded-md p-4 flex flex-col gap-4 hover:bg-shape-secondary/50 shadow-md"
      >
        <header className="flex gap-4 items-center">
          {project.homepage && (
            <img
              src={`https://icon.horse/icon/${homepageHostname}`}
              loading="lazy"
              className="w-9 h-9 rounded-md "
              alt={`${project.name} favicon.`}
            />
          )}
          <div>
            <h4 className="text-title-primary text-lg">{normalizedName}</h4>
            <div className="flex gap-2">
              <div className="flex gap-1 items-center" title="Stars">
                <Star />
                <span>{project.stargazers_count}</span>
              </div>
              <div className="flex gap-1 items-center" title="Forks">
                <GitFork />
                <span>{project.forks_count}</span>
              </div>
            </div>
          </div>
        </header>
        <p>{project.description}</p>
      </article>
    </li>
  )
}
