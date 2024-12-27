interface HeroProps {
  title?: string;
  text?: string;
}

export const Hero = ({ title, text}: HeroProps) => {
  return (
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}