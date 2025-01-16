import { contactNavLinks, navLinks } from '../../../constants/menu';

interface FooterProps {
  version: {
    version: string;
    hash: string;
  };
}

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

interface QuickLink {
  href: string;
  label: string;
}

const quickLinks: QuickLink[] = [
  /*{ href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact' },*/
  { href: '/code-of-conduct', label: 'Code of Conduct' }
];

const FooterBranding = () => (
  <div class="footer-branding">
    <img
      src="/images/logo.png"
      alt="Full Stack MB Logo"
      class="rounded"
    />
    <h2 class="footer-title">Full Stack MB</h2>
    <p class="footer-description">
      A dynamic community of tech enthusiasts and innovators, bringing together professionals across various stacks and roles in the ever-evolving world of technology.
    </p>
    <div class="footer-social-links">
      {navLinks.map((link) => (
        <a href={link.href} class="footer-link" aria-label={link.title}>
          <i class={`fa ${link.icon}`}></i>
        </a>
      ))}
    </div>
  </div>
);

const FooterQuickLinks = () => (
  <div>
    <h3>Quick Links</h3>
    <ul class="footer-links">
      {quickLinks.map((link) => (
        <li>
          <a href={link.href} class="footer-link">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContact = () => (
  <div>
    <h3>Contact Us</h3>
    <div class="footer-contact-links">
      {contactNavLinks.map((link) => (
        <a href={link.href} class="nav-link" target={link.target}>
          <i class={`fa ${link.icon}`}></i>
          {link.label}
        </a>
      ))}
    </div>
    <a href="/slack" class="button button-outline join-our-community-button">
      Join Our Community
    </a>
  </div>
);

export const Footer = ({ version }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <FooterBranding />
          <FooterQuickLinks />
          <FooterContact />
        </div>
        <div class="footer-bottom">
          <p>© Full Stack MB {currentYear}</p>
          <p class="version">{version.version}-{version.hash}</p>
        </div>
      </div>
    </footer>
  );
}