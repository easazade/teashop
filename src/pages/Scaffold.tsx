import { useEffect, type ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { cn } from '../utils/functions'

type PageLayoutProps = {
  title?: string
  children: ReactNode
  className?: string
}

export function PageLayout({ title = 'TeaShop ☕', children, className: classNames = '' }: PageLayoutProps) {
  useEffect(() => {
    const pageTitle = title?.trim()

    if (pageTitle) {
      document.title = pageTitle
    }
  }, [title])

  return (
    <div className={cn('flex flex-col items-center', classNames)}>
      {children}
      <Footer />
    </div>
  )
}
