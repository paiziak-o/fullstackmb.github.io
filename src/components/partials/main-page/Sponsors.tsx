import { CurrentSponsor } from './CurrentSponsor';
// import { BecomeSponsor } from './BecomeSponsor';

export const Sponsors = () => {
  return (
    <section class="section bg-gray">
      <div class="container">
        <h2 class="section-title">Our Sponsors</h2>
        <div class="sponsors-grid">
          <CurrentSponsor />
          {/* <BecomeSponsor /> */}
        </div>
      </div>
    </section>
  );
}