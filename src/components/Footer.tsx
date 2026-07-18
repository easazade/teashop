import { Link } from 'react-router-dom'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'
import youtubeIcon from '../assets/youtube.svg'
import { cn } from '../utils/functions'
import Logo from './Logo'
import { Spacer } from './Spacer'

const socialMediaIcons = [
  { name: 'YouTube', icon: youtubeIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'LinkedIn', icon: linkedinIcon },
  { name: 'Twitter', icon: twitterIcon },
  { name: 'Facebook', icon: facebookIcon },
]

const links = [
  { label: 'Withdraw from my purchase', url: '/' },
  { label: 'General Terms and Conditions', url: '/' },
  { label: 'Privacy Policy', url: '/' },
  { label: 'Cookies', url: '/' },
  { label: '© TEASHOP', url: '/' },
]

export function Footer() {
  return (
    <footer className={cn('bg-footer-bg flex h-140 w-full flex-row justify-between gap-40 px-12 py-16')}>
      <div className="flex flex-1 basis-0 flex-col justify-start gap-6">
        <Logo sizeType="large" />
        <p className="text-light-text max-w-100 text-xs">
          Sale of bulk teas and infusions and exclusive accessories: teapots, tea cups, infusers, Matcha accessories and
          gourmet food.
        </p>
        <div className="flex flex-row gap-6">
          {socialMediaIcons.map(({ name, icon }) => (
            <button key={name} type="button" aria-label={name} className="size-4 cursor-pointer">
              <img src={icon} alt="" className="size-4" />
            </button>
          ))}
        </div>
        <Spacer />
        <div className="flex flex-row gap-4">
          {links.map((e) => (
            <Link to={e.url}>
              <span className="text-gray-text text-[11px]">{e.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-1 basis-0 flex-col items-end">
        <div className="flex w-full flex-1 flex-row justify-evenly">
          <div>Column 1</div>
          <div>Column 2</div>
          <div>Column 3</div>
        </div>
        <div>Payments</div>
      </div>
    </footer>
  )
}
