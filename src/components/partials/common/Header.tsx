import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
}

export const Header = ({}: HeaderProps) => {
  let isMobileMenuOpen = false;
  
  const setIsMobileMenuOpen = (status: boolean) => {
    isMobileMenuOpen = status;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header class="header">
      <div class="container header-content">
        <div class="logo-section">
          <a href="/">
            <img
              src="https://fullstackmb.ca/images/logo.png"
              alt="Full Stack MB Logo"
              width={32}
              height={32}
          />
          </a>
          <div class="logo-text">
            <h1>Full Stack MB</h1>
            <p class="logo-subtitle">Tech Enthusiasts & Innovators</p>
          </div>
        </div>
        <Menu />
        <button class="mobile-menu-button" onClick={toggleMobileMenu}>
          <span class="sr-only">Open menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </div>
    </header>
  );
}