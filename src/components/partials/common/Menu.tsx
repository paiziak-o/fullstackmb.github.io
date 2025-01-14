import { navLinks } from '../../../constants/menu';
export const Menu = () => {
  return (
    <nav class="nav-links">
      {navLinks.map((link) => (
        <a href={link.href} class="nav-link" target={link.target}>
          <i class={`fa ${link.icon}`}></i>
          {link.label}
        </a>
      ))}
    </nav>
  );
};
