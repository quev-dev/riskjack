import { useState, useEffect } from 'react';
import icList from '../content/svgs/list.svg';
import { Transition } from '@headlessui/react';

export default function Nav() {
  const [activeLink, setActiveLink] = useState('Home');
  const [showHamburger, setShowHamburger] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const links = [
    { name: 'Home', to: '/' },
    { name: 'Practice', to: '/practice' },
    { name: 'Find Opponent', to: '/find-game' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth <= 768);
    };
    handleResize(); // calling the function on component mount
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // empty dependency array to run the effect only once on mount

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav
      id='navbar'
      className='flex sticky top-0 justify-between items-center px-8 py-3 animate__animated animate__fadeInDown'
    >
      <h4 id='nav-title'>Riskjack</h4>
      {!showHamburger && (
        <ul className='flex flex-row gap-4'>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                onClick={() => setActiveLink(link.name)}
                // className={activeLink === link.name ? 'activated' : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {showHamburger && (
        <section>
          <button
            id='nav-button'
            className='flex flex-row gap-1'
            onClick={handleDropdownClick}
          >
            <img src={icList} alt='Hamburger/dropdown icon' />
          </button>
          <Transition
            show={showDropdown}
            enter='transition ease-out duration-200 transform'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-75 transform'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <ul id='nav-dropdown' className='box-info absolute top-2 right-0'>
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.to}
                    onClick={() => {
                      setActiveLink(link.name);
                      setShowDropdown(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Transition>
        </section>
      )}
    </nav>
  );
}
