import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
}

export const Header = ({}: HeaderProps) => {

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
        <div data-react-mount="mobile-menu" />
      </div>
    </header>
  );
}