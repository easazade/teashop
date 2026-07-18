import logoCompact from '../assets/logo-compact.png'
import logo from '../assets/logo.png'

type LogoProps = {
  sizeType?: 'large' | 'compact' | 'small'
}

export default function Logo({ sizeType = 'large' }: LogoProps) {
  if (sizeType == 'large') return <img src={logo} className={'h-36 w-fit object-contain'} />
  if (sizeType == 'compact') return <img src={logoCompact} className={'h-14 w-fit object-contain'} />
}
