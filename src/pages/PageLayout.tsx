import { useEffect, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { cn } from '../utils/functions'

type PageLayoutProps = ComponentPropsWithoutRef<'div'> & {
  title?: string
  children?: ReactNode
}

export function PageLayout({ title = 'TeaShop ☕', children, className, ...props }: PageLayoutProps) {
  useEffect(() => {
    const pageTitle = title?.trim()

    if (pageTitle) {
      document.title = pageTitle
    }
  }, [title])

  return (
    <>
      <Navbar />
      <div {...props} className={cn('flex flex-col items-center', className)}>
        {children}
      </div>
      <Footer />
    </>
  )
}
