import ReactDOM from 'react-dom/client';
import { SlackInviteForm } from './SlackInviteForm';
import { ToastContainer } from 'react-toastify';

// Find the mount point
const mountPoint = document.querySelector('[data-react-mount="slack-form"]');

if (mountPoint) {
  ReactDOM.createRoot(mountPoint).render(
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
  console.log('React component mounted');
}
