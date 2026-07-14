import type { CSSProperties } from 'react'

type VerticalGapProps = {
  vertical: CSSProperties['height']
}

type HorizontalGapProps = {
  horizontal: CSSProperties['width']
}

export function VerticalGap({ vertical }: VerticalGapProps) {
  return <div aria-hidden="true" style={{ height: vertical, flexShrink: 0 }} />
}

export function HorizontalGap({ horizontal }: HorizontalGapProps) {
  return <div aria-hidden="true" style={{ width: horizontal, flexShrink: 0 }} />
}
