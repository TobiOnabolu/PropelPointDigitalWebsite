import HeaderSection from '../sections/HeaderSection'
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';

export default function LandingPage(props) {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <BackDrop>
      <HeaderSection mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesSection/>
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