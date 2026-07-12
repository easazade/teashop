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
      <h3 className={' pt-12 pb-6'}>Explore our Collections</h3>

      <div className={'flex h-140 w-full overflow-hidden gap-4'}>
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
