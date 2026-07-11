export default function Explore() {
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
      <h3 className={''}>Explore our Collections</h3>
      <div className={'flex flex-row justify-between h-140 w-full overflow-hidden'}>
        {collections.map((imageUrl) => {
          return (
            <div className={'h-full w-full flex-1'}>
              <img key={imageUrl} src={imageUrl} className={'h-full max-h-full object-cover'} />
            </div>
          )
        })}
      </div>
    </>
  )
}
