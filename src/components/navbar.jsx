import { DropDownButton, LoginButton } from "./buttons";
import { Logo } from "./Logo";

export const NAVIGATION = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function NavBar(props) {
  const { setMobileMenuOpen } = props

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <Logo />
      <DropDownButton setMobileMenuOpen={setMobileMenuOpen} />
      <NavBarLinks NAVIGATION={NAVIGATION} />
      <LoginButton />
    </nav>
  );
}

export function NavBarLinks(props) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {props.NAVIGATION.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
  )
}
