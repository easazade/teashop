import BestSellers from '../../components/BestSellers'
import Deals from '../../components/Deals'
import { VerticalGap } from '../../components/Gap'
import { OurHistory } from '../../components/OurHistory'
import VisitStores from '../../components/VisitStores'
import { PageLayout } from '../PageLayout'
import ExploreCollections from './components/ExploreCollections'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <PageLayout>
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
    </PageLayout>
  )
}
