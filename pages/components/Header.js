// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white p-10 text-black">
    <div className="container flex items-center">
      <div className="flex items-center">
        <Link legacyBehavior href="/">
          <a className="mr-20 ml-60">
          <div className="w-15 h-15 border-10 rounded-lg   overflow-hidden">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2a/3f/ad/2a3fad27-0900-8d2a-a1d2-67b675e18c1a/AppIcon-1x_U007emarketing-0-7-0-85-220.png/60x60bb.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          </a>
        </Link>
        <Link legacyBehavior href="/Emotions">
          <a className="mr-20 ml-40">Emotions</a>
        </Link>
        <Link legacyBehavior href="/Manifesto">
          <a className="mr-20">Manifesto</a>
        </Link>
        <Link legacyBehavior href="/Self-awareness">
          <a className="mr-20">Self-awareness Test</a>
        </Link>
        <Link legacyBehavior href="/Work">
          <a className="mr-20">Work With Us</a>
        </Link>
      </div>
      <div>
        <a href="#" className="bg-black text-white rounded-full px-4 py-2">Download App</a>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
