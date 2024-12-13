interface CurrentSponsorProps {
  logo?: string;
  name?: string;
  description?: string;
  link?: string;
}

export const CurrentSponsor = ({
  logo = "images/net.png",
  name = ".NET Foundation",
  description = "Helping keep Full Stack Manitoba connected through meetup.com and with other user groups from across North America.",
  link = "https://dotnetfoundation.org/"
}: CurrentSponsorProps) => {
  return (
    <div class="sponsor-card current">
      <h3>Current Sponsor</h3>
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        <img
          src={logo}
          alt={`${name} Logo`}
          width="auto"
          height={60}
          class="rounded"
        />
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <a href={link} class="button button-outline upcoming-event-button">
        Visit {name}
      </a>
    </div>
  );
}