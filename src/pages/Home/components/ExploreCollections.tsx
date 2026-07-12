import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ExploreCollections() {
  const collections = [
    'https://images.pexels.com/photos/31474385/pexels-photo-31474385.jpeg',
    'https://images.pexels.com/photos/6694154/pexels-photo-6694154.jpeg',
    'https://images.pexels.com/photos/25440509/pexels-photo-25440509.jpeg',
  ]

  if (collections.length < 3) {
    return null
  }

  return (
    <>
      <h3 className={'pt-12 pb-6'}>Explore our Collections</h3>

      <div className={'relative flex h-140 w-full overflow-hidden gap-4'}>
        <ArrowButton direction="left" onTap={() => {}} />
        <ArrowButton direction="right" onTap={() => {}} />
        {collections.map((imageUrl) => {
          return (
            <div key={imageUrl} className={'h-full flex-1 cursor-pointer'}>
              <img src={imageUrl} className={'h-full w-full object-cover'} />
            </div>
          )
        })}
      </div>
    </>
  )
}

type ArrowButtonProps = {
  direction: 'left' | 'right'
  onTap: () => void
}

function ArrowButton({ direction, onTap }: ArrowButtonProps) {
  return (
    <div
      className={`flex justify-center items-center absolute rounded-4xl w-12 h-12 
                  top-1/2 -translate-y-1/2 bg-background/70 m-2 transition-colors duration-100 hover:bg-background 
                  shadow-gray-300 shadow-2xl cursor-pointer
                  ${direction === 'left' ? 'left-0' : 'right-0'}
      `}
      onClick={() => onTap()}
    >
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </div>
  )
}
