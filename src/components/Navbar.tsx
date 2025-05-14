import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 md:py-0">
          <Link to="/home" className="flex-shrink-0 mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start text-amber-600">
              <span className="font-semibold text-xl tracking-tight">Sim Sim</span>
              <span className="text-xs ml-1 mt-1 text-amber-500">심심(心心)</span>
            </div>
          </Link>
          <div className="flex items-center justify-center space-x-4">
            <NavLink to="/about" title="About Us" active={location.pathname === '/about'} />
            <NavLink to="/services" title="Services" active={location.pathname === '/services'} />
            <NavLink to="/community" title="Community" active={location.pathname === '/community'} />
            <NavLink to="/mypage" title="My Page" active={location.pathname === '/mypage'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  title: string;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, title, active }) => {
  return (
    <Link
      to={to}
      className={`px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        active ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
      }`}
    >
      {title}
    </Link>
  );
};

export default Navbar;