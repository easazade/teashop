import history1 from '../assets/history1.jpg'
import Button from './Button'

export function OurHistory() {
  return (
    <div
      className={`text-on-primary flex w-full flex-row items-center justify-evenly bg-[url('assets/about-us-bg.png')]
        bg-cover bg-center bg-no-repeat`}
    >
      <div className={'text-on-primary flex h-190 flex-1 basis-0 flex-col items-center justify-center'}>
        <img src={history1} className="h-130 w-130 object-cover" />
      </div>
      <div className="flex flex-1 basis-0 flex-col items-center justify-center">
        <div className="flex flex-col items-start gap-6 p-20">
          <h3 className="text-on-primary">Passion since 1990</h3>
          <p className="text-on-primary">
            Passion and pride in working in the world of tea have always been the driving force behind Tea Shop's
            evolution. Our purpose is to offer the best fresh tea in bulk. That's why our carefully selected selection
            of up to 130 varieties of teas and infusions includes proprietary blends carefully developed by our experts.
          </p>
          <Button label="See more" onClick={() => {}} inverted={true} minWidth={180} />
        </div>
      </div>
    </div>
  )
}
