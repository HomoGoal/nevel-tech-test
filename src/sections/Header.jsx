import { useEffect, useState } from 'react';

import logo from '../img/logo.png';
import menu from '../img/menu.png';
import close from '../img/close.png';

import { listNav } from '../data/header';

function Header() {
  const [activeNav, setActiveNav] = useState(listNav[0].value);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleActive = (value) => {
    setActiveNav(value)

    if (window.innerWidth < 1280) {
      document.body.classList.remove('none-scroll')
      setActiveMenu(false)
    }
  }

  const handleActiveMenu = () => {
    if (activeMenu) {
      document.body.classList.remove('none-scroll')
      setActiveMenu(false)
    } else {
      document.body.classList.add('none-scroll')
      setActiveMenu(true)
    }
  }

  useEffect(() => {
    const handleHidden = () => {
      document.body.classList.remove('none-scroll')
      setActiveMenu(false)
    }

    window.addEventListener('resize', handleHidden)

    return () =>  window.removeEventListener('resize', handleHidden)
  }, [])

  return (
    <header className='header'>
        <div className='header-inner'>
            <div className='header-logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className={`header-nav ${activeMenu && "active"}`}>
                {listNav.map((item) => <button className={`${item.value === activeNav && "active"} p1`} key={item.label} onClick={() => handleActive(item.value)}>{item.label}</button>)}
            </div>
            <div className={`header-nav-mobile ${activeMenu && "active"}`} onClick={handleActiveMenu}>
                <img src={activeMenu ? close : menu } alt="icon"/>
            </div>
        </div>
    </header>
  );
}

export default Header;
