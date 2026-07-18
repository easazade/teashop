import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'
import youtubeIcon from '../assets/youtube.svg'
import { cn } from '../utils/functions'
import Logo from './Logo'

const socialMediaIcons = [
  { name: 'YouTube', icon: youtubeIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'LinkedIn', icon: linkedinIcon },
  { name: 'Twitter', icon: twitterIcon },
  { name: 'Facebook', icon: facebookIcon },
]

export function Footer() {
  return (
    <footer className={cn('bg-footer-bg flex h-140 w-full flex-row justify-between p-12')}>
      <div className="flex flex-1 basis-0 flex-col justify-start gap-7">
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
      </div>
      <div className="flex-1 basis-0">B</div>
    </footer>
  )
}
