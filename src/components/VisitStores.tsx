import { useNavigate } from 'react-router-dom'
import store1 from '../assets/store1.jpg'
import store2 from '../assets/store2.png'
import Button from './Button'
import { VerticalGap } from './Gap'

export default function VisitStores() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-180 w-full flex-row gap-16 p-10">
      <div className="flex flex-1 basis-0 flex-col items-start justify-center">
        <h4>VISIT OUR STORES</h4>
        <VerticalGap vertical={12} />
        <p className="max-w-140 text-2xl">
          Immerse yourself in a sensory experience by visiting our stores, where you can taste our teas, appreciate the
          high quality of our product and receive the best advice from our specialized staff.
        </p>
        <VerticalGap vertical={20} />
        <Button
          label={'search for stores'}
          minWidth={232}
          onClick={() => {
            navigate('/stores')
          }}
        />
      </div>
      <div className="relative flex-1 basis-0">
        <div className="absolute right-0 w-[60%]">
          <img src={store1} />
        </div>
        <div className="absolute top-40 left-0 w-[50%]">
          <img src={store2} />
        </div>
      </div>
    </div>
  )
}
