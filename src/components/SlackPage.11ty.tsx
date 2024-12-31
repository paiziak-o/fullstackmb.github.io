
import { Hero } from './partials/main-page/Hero';
// import { SlackInviteForm } from './client/SlackInviteForm';
import { WhyJoinSlack } from './slack/WhyJoinSlack';

export function SlackPage() {

  return (
    <div>
    <Hero 
      title="Join Our Diverse Tech Community" 
      text="Connect, collaborate, and grow with 280+ tech professionals in Manitoba Our Slack workspace is the hub for Full Stack MB members across various technologies and roles. No matter your area of expertise, there's a place for you to share ideas, ask questions, and stay updated on the latest in tech." 
    />

    <section class="section bg-white">
      <div class="container">
        <div data-react-mount="slack-form"></div>
      </div>
    </section>
    
    <section className="section bg-gray">
      <div className="container">
        <WhyJoinSlack />
      </div>
    </section>
     
 
  </div>
  )
}