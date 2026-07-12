import { Navbar } from '../../components/Navbar'
import ExploreCollections from './components/ExploreCollections'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <div className={'flex flex-col items-center'}>
      <Navbar />
      <Slider
        images={[
          'https://images.pexels.com/photos/35652866/pexels-photo-35652866.jpeg',
          'https://images.pexels.com/photos/37849928/pexels-photo-37849928.jpeg',
          'https://images.pexels.com/photos/35004341/pexels-photo-35004341.jpeg',
          'https://images.pexels.com/photos/38166104/pexels-photo-38166104.jpeg',
          'https://images.pexels.com/photos/38360655/pexels-photo-38360655.jpeg',
        ]}
      />
      <ExploreCollections />
    </div>
  )
}
