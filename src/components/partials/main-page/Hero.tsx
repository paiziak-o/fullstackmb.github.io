interface HeroProps {
  title?: string;
  subtitle?: string;
}

export const Hero = ({ 
  title = "Full Stack MB",
  subtitle = "Serverless enthusiasts crafting the future with lambdas and microservices."
}: HeroProps) => {
  return (
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}