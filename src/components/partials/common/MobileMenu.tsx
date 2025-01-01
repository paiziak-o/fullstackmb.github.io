interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div class="mobile-menu">
      <button class="mobile-menu-close" onClick={onClose}>
        <span class="sr-only">Close menu</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <nav class="mobile-nav-links">
        <a href="#join" class="mobile-nav-link">Join</a>
        <a href="#rsvp" class="mobile-nav-link">RSVP</a>
        <a href="#" class="mobile-nav-link">LinkedIn</a>
        <a href="#signup" class="mobile-nav-link">Sign Up</a>
        <a href="#" class="mobile-nav-link">YouTube</a>
        <a href="#" class="mobile-nav-link">GitHub</a>
      </nav>
    </div>
  );
}