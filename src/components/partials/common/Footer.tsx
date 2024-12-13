import { navLinks } from "./Menu";

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
  { href: "#", label: "About Us" },
  { href: "#", label: "Events" },
  { href: "#", label: "Sponsors" },
  { href: "#", label: "Contact" },
];

const FooterBranding = () => (
  <div>
    <img
      src="https://fullstackmb.ca/images/logo.png"
      alt="Full Stack MB Logo"
      width={48}
      height={48}
      class="rounded"
    />
    <h2 style={{ marginTop: '16px' }}>Full Stack MB</h2>
    <p style={{ marginTop: '16px', color: '#a0aec0' }}>
      A dynamic group of serverless go-getters who see sharp in the folds of
      lambdas, microservices, and rainbows! Sandwich!
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
    {/* <h3>Quick Links</h3>
    <ul class="footer-links">
      {quickLinks.map((link) => (
        <li>
          <a href={link.href} class="footer-link">{link.label}</a>
        </li>
      ))}
    </ul> */}
  </div>
);

const FooterContact = () => (
  <div>
    <h3>Contact Us</h3>
    <p style={{ color: '#a0aec0', marginTop: '16px' }}>Winnipeg, Manitoba</p>
    <p style={{ color: '#a0aec0' }}>Email: info@fullstackmb.ca</p>
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