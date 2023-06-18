import logo from '../assets/logo.png';

export function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          className="h-16 w-auto"
          src={logo}
          alt=""
        />
      </a>
    </div>
  );
}