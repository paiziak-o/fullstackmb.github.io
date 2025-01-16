
import { Hero } from './partials/main-page/Hero';
import { WhyJoinSlack } from './partials/slack/WhyJoinSlack';

export function ContentPage({ content }) {

  return (
    <div>
    <Hero 
      title="Code of Conduct" 
      text="By participating in any in-person events or online communities organized by Full Stack Manitoba, you agree to adhere to this Code of Conduct. This commitment ensures a welcoming, inclusive, and respectful environment for all participants." 
    />

    <section class="section bg-white">
      <div class="container document">
        {content}
      </div>
    </section>

  </div>
  )
}