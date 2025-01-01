import ReactDOM from 'react-dom/client';
import { SlackInviteForm } from './SlackInviteForm';
import { ToastContainer } from 'react-toastify';
import { MobileMenu } from './MobileMenu';

// Find the mount point Slack Invite Form
const slackMountPoint = document.querySelector('[data-react-mount="slack-form"]');

if (slackMountPoint) {
  ReactDOM.createRoot(slackMountPoint).render(
    <>
      <SlackInviteForm />
      <ToastContainer
        hideProgressBar
        autoClose={10000}
        position='top-right'
        aria-label=''
      />
    </>
  );
}

// Find the mount Mobile Menu
const mobileMountPoint = document.querySelector('[data-react-mount="mobile-menu"]');

if (mobileMountPoint) {
  ReactDOM.createRoot(mobileMountPoint).render(
    <>
      <MobileMenu onClose={() => {}} />
    </>
  );
}
