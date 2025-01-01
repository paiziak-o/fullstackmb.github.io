interface BenefitProps {
  title: string;
  description: string;
}

const Benefit = ({ title, description }: BenefitProps) => (
  <div class="benefit-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export const WhyJoinSlack = () => {
  const benefits = [
    {
      title: "Diverse Network",
      description: "Connect with professionals across various tech stacks, from serverless to full stack, .NET to Python, and more."
    },
    {
      title: "Learn and Grow",
      description: "Access resources, participate in discussions, and stay updated on trends across multiple technologies and roles."
    },
    {
      title: "Collaborate on Projects",
      description: "Find collaborators for cross-functional projects, get feedback on your ideas, and contribute to community initiatives."
    }
  ];

  return (
    <section class="why-join-slack">
      <div class="container">
        <h2>Why Join Our Slack?</h2>
        <div class="benefits-grid">
          {benefits.map((benefit) => (
            <Benefit 
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};