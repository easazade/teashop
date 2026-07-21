import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs))
}

export function tryParseInt(value: string): number | null {
  const parsed = Number(value)

  return Number.isInteger(parsed) ? parsed : null
}
