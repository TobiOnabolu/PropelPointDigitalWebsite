import { DropDownPanel } from "../components/dropdown";
import { NavBar, NAVIGATION } from "../components/navbar";


export default function HeaderSection(props) {
  const { mobileMenuOpen, setMobileMenuOpen } = props;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <NavBar setMobileMenuOpen={setMobileMenuOpen}/>
      <DropDownPanel mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} NAVIGATION={NAVIGATION}/>
    </header>
  )
}

