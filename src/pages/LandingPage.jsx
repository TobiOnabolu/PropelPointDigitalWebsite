import HeaderSection from '../sections/HeaderSection'
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import ConsultationSection from '../sections/ConsultationSection';
import FooterSection from '../sections/FooterSection';

export default function LandingPage(props) {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <BackDrop>
      <HeaderSection mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <ServicesSection/>
      <PortfolioSection />
      <ConsultationSection />
      <FooterSection />
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