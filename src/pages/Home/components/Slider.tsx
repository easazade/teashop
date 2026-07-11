import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

type SliderProps = {
  images?: string[]
}

export function Slider({ images = [] }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const intervalId = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 7000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [images.length])

  const currentImage = images[currentIndex]

  return (
    <div className={'relative h-80 md:h-154 w-full bg-placeholder overflow-hidden'}>
      {/* NOTE: AnimatePresence component checks the tree and if a motion component is either removed or its key is changed it
                will keep it in the // tree run its exit animation (if defined) then it will remove it from tree */}
      <AnimatePresence initial={false}>
        {currentImage && (
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={''}
            className={'absolute inset-0 h-full w-full object-cover'}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
