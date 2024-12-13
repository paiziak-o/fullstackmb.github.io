interface Friend {
  name: string;
  description: string;
  logo?: string;
  link?: string;
}

const friendsData: Friend[] = [
  {
    name: "Winnipeg .NET User Group",
    description: "A community of .NET developers in Winnipeg",
    logo: "/placeholder.svg",
    link: "#"
  },
  {
    name: "Tiny Bison Venture",
    description: "Premier developer conference in the Canadian prairies",
    logo: "/placeholder.svg",
    link: "#"
  },
  {
    name: "Ruby and Rails",
    description: "Ruby and Rails enthusiasts in Winnipeg",
    logo: "/placeholder.svg",
    link: "#"
  }
];

const FriendCard = ({ 
  name, 
  description, 
  logo = "/placeholder.svg",
  link = "#"
}: Friend) => {
  return (
    <div class="group-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={logo}
          alt={`${name} logo`}
          width={48}
          height={48}
          class="rounded-full"
        />
        <h3>{name}</h3>
      </div>
      <p style={{ marginTop: '16px' }}>{description}</p>
      <a href={link} class="button button-outline" style={{ marginTop: '16px' }}>
        Learn More
      </a>
    </div>
  );
}

interface FriendsProps {
  friends?: Friend[];
  title?: string;
}

export const Friends = ({ 
  friends = friendsData,
  title = "Friend of Full Stack MB"
}: FriendsProps) => {
  return (
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">{title}</h2>
        <div class="groups-grid">
          {friends.map((friend) => (
            <FriendCard 
              {...friend}
            />
          ))}
        </div>
      </div>
    </section>
  );
}