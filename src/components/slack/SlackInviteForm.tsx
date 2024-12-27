interface SlackInviteFormProps {
  onSubmit?: (email: string) => void;
}

export const SlackInviteForm = ({ onSubmit }: SlackInviteFormProps) => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const email = formData.get('email') as string;
  //   if (onSubmit) onSubmit(email);
  // };

  return (
    <div class="slack-invite-form">
      <div class="form-container">
        <h2>Get Your Slack Invitation</h2>
        <p>Enter your email to join our community of diverse tech professionals</p>
        
        <form>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <button type="submit" class="submit-button">
            <i class="fa fa-paper-plane"></i>
            Send Invitation
          </button>
          
          <p class="terms">
            By joining, you agree to our Community Guidelines and Code of Conduct.
          </p>
        </form>
      </div>
    </div>
  );
};