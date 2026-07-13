import BestSellers from '../../components/BestSellers'
import { Navbar } from '../../components/Navbar'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <div className={'flex flex-col items-center'}>
      <Navbar />
      <Slider />
      {/* <ExploreCollections /> */}
      <BestSellers />
    </div>
  )
}
