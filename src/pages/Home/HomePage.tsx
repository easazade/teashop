import BestSellers from '../../components/BestSellers'
import Deals from '../../components/Deals'
import { OurHistory } from '../../components/OurHistory'
import VisitStores from '../../components/VisitShops'
import { PageLayout } from '../PageLayout'
import ExploreCollections from './components/ExploreCollections'
import { Slider } from './components/Slider'

export default function HomePage() {
  return (
    <PageLayout className="gap-8">
      <Slider />
      <ExploreCollections />
      <BestSellers />
      <Deals />
      <VisitStores />
      <OurHistory />
    </PageLayout>
  )
}
