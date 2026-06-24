type NavbarProps = {
  names: string[]
}

export function Navbar({ names }: NavbarProps) {
  return <div>{names.join(', ')} </div>
}
