document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const signUpButton = document.getElementById('signUpButton');

  signUpButton.addEventListener('click', () => {
      const email = emailInput.value;
      
      if (email && email.includes('@')) {
          const config = {
              headers: {
                  'Content-Type': 'text/json'
              }
          };
          
          axios.post("https://fullstackmbapi.azurewebsites.net/api/slack",
              JSON.stringify({"email": email}), config)
              .then(response => {
                  if (response.data.ok) {
                      new PNotify({
                          type: 'success',
                          text: `You should receive an email to the address '${email}' below shortly!`
                      });
                      emailInput.value = '';
                  } else {
                      new PNotify({type: 'warning', text: response.data.error})
                  }
                  console.log(response.data);
              })
              .catch(error => {
                  console.error(error);
                  new PNotify({type: "error", text: error})
              });
      } else {
          new PNotify({text: 'Please enter a valid email.'}) 
      }
  });

  // Handle button disabled state
  emailInput.addEventListener('input', () => {
      const email = emailInput.value;
      signUpButton.disabled = !(email && email.includes('@'));
  });
});