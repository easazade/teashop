import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function Slider() {
  const images = [
    'https://images.pexels.com/photos/35652866/pexels-photo-35652866.jpeg',
    'https://images.pexels.com/photos/37849928/pexels-photo-37849928.jpeg',
    'https://images.pexels.com/photos/35004341/pexels-photo-35004341.jpeg',
    'https://images.pexels.com/photos/38166104/pexels-photo-38166104.jpeg',
    'https://images.pexels.com/photos/38360655/pexels-photo-38360655.jpeg',
  ]

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
    <div className={'relative h-80 md:h-160 w-full bg-placeholder overflow-hidden cursor-pointer'}>
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
      <SlideIndicator
        currentIndex={currentIndex}
        slidesCount={images.length}
        goToSlide={(index: number) => {
          if (index != currentIndex) {
            setCurrentIndex(index)
          }
        }}
      />
    </div>
  )
}

type SlideIndicatorProps = {
  currentIndex: number
  slidesCount: number
  goToSlide: (index: number) => void
}

function SlideIndicator({ currentIndex, slidesCount, goToSlide }: SlideIndicatorProps) {
  return (
    <div
      className={
        'absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-300/50 flex flex-row justify-center gap-1 p-1 rounded-sm'
      }
    >
      {Array.from({ length: slidesCount }).map((_, index) => {
        const bg = currentIndex === index ? 'bg-black' : 'bg-white'
        return (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`${bg} w-1.75 h-1.75 rounded-sm cursor-pointer`}
          ></div>
        )
      })}
    </div>
  )
}
