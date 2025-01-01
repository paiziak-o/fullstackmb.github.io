interface SponsorBenefit {
  text: string;
}

const sponsorBenefits: SponsorBenefit[] = [
  { text: 'Logo placement on our website' },
  { text: 'Mention in our events' },
  { text: 'Opportunity to present at our meetups' },
  { text: 'Access to our talent pool' },
];

interface BecomeSponsorProps {
  description?: string;
  contactLink?: string;
}

export const BecomeSponsor = ({
  description = 'Support the Full Stack MB community and gain visibility among talented developers. We offer various sponsorship packages to suit your needs.',
  contactLink = '#',
}: BecomeSponsorProps) => {
  return (
    <div class="sponsor-card dark">
      <h3>Become a Sponsor</h3>
      <p style={{ marginTop: '16px' }}>
        {description}
      </p>
      <ul class="sponsor-list">
        {sponsorBenefits.map((benefit, index) => (
          <li key={index}>{benefit.text}</li>
        ))}
      </ul>
      <a href={contactLink} class="button button-primary">
        Contact Us About Sponsorship
      </a>
    </div>
  );
}