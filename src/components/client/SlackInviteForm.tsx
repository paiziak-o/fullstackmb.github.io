import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface SlackInviteFormProps {
  onSubmit?: (email: string) => void;
}

interface SlackResponse {
  ok: boolean;
  error?: string;
}

export const SlackInviteForm = ({ onSubmit }: SlackInviteFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://fullstackmbapi.azurewebsites.net/api/slack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: SlackResponse = await response.json();

      if (data.ok) {
        toast.success(`You should receive an email to the address '${email}' shortly!`);
        if (onSubmit) onSubmit(email);
        setEmail('');
      } else {
        const errorMessage = data.error === 'already_in_team' 
          ? 'This email is already registered in our Slack workspace.'
          : data.error || 'An error occurred while processing your request.';
        
        toast.warning(errorMessage);
      }
    } catch (error) {
      toast.error('An error occurred while processing your request.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="slack-invite-form">
      <div className="form-container">
        <h2>Get Your Slack Invitation</h2>
        <p>Enter your email to join our community of diverse tech professionals</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            <i className="fa fa-paper-plane"></i>
            {isSubmitting ? 'Sending...' : 'Send Invitation'}
          </button>
        </form>
      </div>
    </div>
  );
};