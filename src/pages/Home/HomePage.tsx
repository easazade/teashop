import BestSellers from '../../components/BestSellers'
import Deals from '../../components/Deals'
import { Footer } from '../../components/Footer'
import { VerticalGap } from '../../components/Gap'
import { Navbar } from '../../components/Navbar'
import { OurHistory } from '../../components/OurHistory'
import VisitStores from '../../components/VisitStores'
import ExploreCollections from './components/ExploreCollections'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <div className={'flex flex-col items-center pb-40'}>
      <Navbar />
      <Slider />
      <VerticalGap vertical={30} />
      <ExploreCollections />
      <VerticalGap vertical={30} />
      <BestSellers />
      <VerticalGap vertical={30} />
      <Deals />
      <VerticalGap vertical={30} />
      <VisitStores />
      <VerticalGap vertical={30} />
      <OurHistory />
      <VerticalGap vertical={30} />
      <Footer />
    </div>
  )
}
