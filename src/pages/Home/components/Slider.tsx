import { useEffect, useState } from 'react'

type SliderProps = {
  images?: string[]
}

export function Slider({ images = [] }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 2500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [images.length])

  return (
    <div className={'h-148 w-full bg-placeholder overflow-hidden'}>
      <img key={images[currentIndex]} src={images[currentIndex]} alt={''} className={'h-full w-full object-cover'} />
    </div>
  )
}
