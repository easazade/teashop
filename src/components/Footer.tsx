import { Link } from 'react-router-dom'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'
import alipayPlusIcon from '../assets/payments/alipay-plus.svg'
import americanExpressIcon from '../assets/payments/american-express.svg'
import applePayIcon from '../assets/payments/apple-pay.svg'
import ebillIcon from '../assets/payments/ebill.svg'
import googlePayIcon from '../assets/payments/google-pay.svg'
import idealWeroIcon from '../assets/payments/ideal-wero.svg'
import klarnaIcon from '../assets/payments/klarna.svg'
import mastercardIcon from '../assets/payments/mastercard-alt.svg'
import paypalIcon from '../assets/payments/paypal.svg'
import postfinancePayIcon from '../assets/payments/postfinance-pay.svg'
import swisspassIcon from '../assets/payments/swisspass.svg'
import visaIcon from '../assets/payments/visa-alt.svg'
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

const paymentIcons = [
  { name: 'Alipay+', icon: alipayPlusIcon },
  { name: 'American Express', icon: americanExpressIcon },
  { name: 'Apple Pay', icon: applePayIcon },
  { name: 'eBill', icon: ebillIcon },
  { name: 'Google Pay', icon: googlePayIcon },
  { name: 'iDEAL Wero', icon: idealWeroIcon },
  { name: 'Klarna', icon: klarnaIcon },
  { name: 'Mastercard', icon: mastercardIcon },
  { name: 'PayPal', icon: paypalIcon },
  { name: 'PostFinance Pay', icon: postfinancePayIcon },
  { name: 'SwissPass', icon: swisspassIcon },
  { name: 'Visa', icon: visaIcon },
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
        <div className="flex w-3/4 flex-wrap items-center justify-end gap-4">
          {paymentIcons.map(({ name, icon }) => (
            <img key={name} src={icon} alt={name} className="h-6 w-auto object-contain" />
          ))}
        </div>
      </div>
    </footer>
  )
}
