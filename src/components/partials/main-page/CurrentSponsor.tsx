interface CurrentSponsorProps {
  logo?: string;
  name?: string;
  description?: string;
  link?: string;
}

export const CurrentSponsor = ({
  logo = '/images/net.png',
  name = '.NET Foundation',
  description = 'Helping keep Full Stack Manitoba connected through meetup.com and with other user groups from across North America.',
  link = 'https://dotnetfoundation.org/',
}: CurrentSponsorProps) => {
  return (
    <div class="sponsor-card current">
      <div class="sponsor-card-content">
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
      <a href={link} class="button button-primary upcoming-event-button">
        Visit {name}
      </a>
    </div>
  );
}