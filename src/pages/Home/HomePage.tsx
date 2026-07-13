import BestSellers from '../../components/BestSellers'
import Deals from '../../components/Deals'
import { Navbar } from '../../components/Navbar'
import ExploreCollections from './components/ExploreCollections'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <div className={'flex flex-col items-center pb-20'}>
      <Navbar />
      <Slider />
      <ExploreCollections />
      <BestSellers />
      <Deals />
    </div>
  )
}
