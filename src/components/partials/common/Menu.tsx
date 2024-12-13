export const navLinks = [
  {
    href: "/slack",
    icon: "fa-slack",
    label: "Join",
    title: "Join the Full Stack MB Slack",
    target: "_self",
  },
  {
    href: "https://www.meetup.com/fullstackmb/",
    icon: "fa-meetup",
    label: "RSVP",
    title: "Come to an event",
    target: "_blank",
  },
  {
    href: "https://www.linkedin.com/company/fullstackmb",
    icon: "fa-linkedin",
    label: "LinkedIn",
    title: "Follow us on LinkedIn.",
    target: "_blank",
  },
  {
    href: "http://eepurl.com/clTOr",
    icon: "fa-newspaper-o",
    label: "Sign Up",
    title: "Sign up for our newsletter.",
    target: "_blank",
  },
  {
    href: "https://www.youtube.com/channel/UC6OzdI6-htXE_97zamJRaaA",
    icon: "fa-youtube-play",
    label: "YouTube",
    title: "Subscribe to our YouTube channel to get notifications.",
    target: "_blank",
  },
  {
    href: "https://github.com/fullstackmb",
    icon: "fa-github",
    label: "GitHub",
    title: "Fork us on GitHub and collaborate.",
    target: "_blank",
  },
];

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
