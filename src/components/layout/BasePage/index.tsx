import { ReactNode } from 'react'
import { BasePageContainer, PageContent, PageHeader } from './styles'

interface BasePageProps {
  children: ReactNode
  heading: string
}

export const BasePage = ({ children, heading }: BasePageProps) => {
  return (
    <BasePageContainer>
      <PageHeader>
        <h1>{heading}</h1>
      </PageHeader>
      <PageContent>{children}</PageContent>
    </BasePageContainer>
  )
}
