import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <BackDrop>
      <HeaderSection>
        <NavBar>
          <Logo />
          <DropDownButton setMobileMenuOpen={setMobileMenuOpen} />
          <NavBarLinks navigation={navigation} />
          <LoginButton />
        </NavBar>
        <DropDownPanel mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      </HeaderSection>
      <HeroSection />
    </BackDrop>
  )
}

function BackDrop(props) {
  return (
    <div className="bg-white">
      {props.children}
    </div>
  )
}

function HeaderSection(props) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {props.children}
    </header>
  )
}

function NavBar(props) {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      {props.children}
    </nav>
  );
}

function LoginButton() {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}

function DropDownPanel(props) {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

function DropDownButton(props) {
  const { setMobileMenuOpen } = props

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

function NavBarLinks(props) {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {props.navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
  )
}

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
  );
}

function HeroSection() {

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <BackgroundBlur sign='-' topOffset='40' mobileTopOffset='80' leftOffset='[calc(50%-11rem)]' rotateDegrees='30' mobileLeftOffset='[calc(50%-30rem)]'  />
      <MainContentContainer>
        <SeeMoreButton />
        <TextContainer alignment="center">
          <Title />
          <Text />
          <FlexContainer marginTop="10" horizontalAlignment="center" verticalAlignment="center" horizontalItemSpacing="6">
            <SolidButton />
            <TransparentButton />
          </FlexContainer>
        </TextContainer>
      </MainContentContainer>
      <BackgroundBlur sign='' topOffset='[calc(100%-13rem)]' mobileTopOffset='[calc(100%-30rem)]' leftOffset='[calc(50%+3rem)]' rotateDegrees='0' mobileLeftOffset='[calc(50%+36rem)]'  />
    </div>
  )
}

function TextContainer(props) {
  const {
    alignment // center, left, right
  } = props

  return (
    <div className={`text-${alignment}`}>
      {props.children}
    </div>
  )
}

function FlexContainer(props) {
  const {
    marginTop, // int (units)
    horizontalAlignment, // i.e center, end, start
    verticalAlignment, // i.e center, end, start
    horizontalItemSpacing, // int (units)
  } = props

  return (
    <div className={`mt-${marginTop} flex items-${horizontalAlignment} justify-${verticalAlignment} gap-x-${horizontalItemSpacing}`}>
      {props.children}
    </div>
  )
}

function MainContentContainer(props) {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {props.children}
    </div>
  )
}

function SolidButton() {
  return (
    <a
      href="#"
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Get started
    </a>
  )
}

function TransparentButton() {
  return (
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Learn more <span aria-hidden="true">→</span>
    </a>
  )
}

function Title() {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Data to enrich your online business
    </h1>
  )
}

function Text() {
  return (
    <p className="mt-6 text-lg leading-8 text-gray-600">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
      fugiat veniam occaecat fugiat aliqua.
    </p>
  )
}

function SeeMoreButton() {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{' '}
        <a href="#" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  )
}

function BackgroundBlur(props) {
  const {
    sign, // - for top, blank if coming from bottom
    topOffset, // 40 for top, [calc(100%-13rem)] for bottom
    mobileTopOffset, // 80 for top, [calc(100%-30rem)] for bottom
    leftOffset, // [calc(50%-11rem)]for top, [calc(50%+3rem)] for bottom
    rotateDegrees, // i.e 30
    mobileLeftOffset // [calc(50%-30rem)] for top, [calc(50%+36rem)] for bottom
  } = props;

  return (
    <div
      className={`absolute inset-x-0 ${sign}top-${topOffset} -z-10 transform-gpu overflow-hidden blur-3xl sm:${sign}top-${mobileTopOffset}`}
      aria-hidden="true"
    >
      <div
        className={`relative left-${leftOffset} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[${rotateDegrees}deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-${mobileLeftOffset} sm:w-[72.1875rem]`}
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
}