// write cool JS hwere!!

initApp()

    function initApp() {
      const nameInput = document.getElementById('name');
      const mailInput = document.getElementById('mail');

      const submitButton = document.getElementById('submit');

      submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission
        EvaluateForm(nameInput.value, mailInput.value);
      });
    }

    function EvaluateForm(name, email) {

        // Validate the form inputs
        console.log(name);
        
      const errorDiv = document.getElementById('formErrors');
      const successDiv = document.getElementById('formSuccess');
      errorDiv.textContent = '';
      successDiv.textContent = '';
      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let errors = [];

 
  
      if (name.trim().length<3) {
        errors.push('Navnet skal være mindst 3 bogstaver.');
      }

      if (!emailRegex.test(email)) {
        errors.push('Emailen er ikke gyldig.');
      }

      if (errors.length > 0) {
        errorDiv.innerHTML = errors.join('<br>');
        errorDiv.style.display = 'block';
      } else {
        successDiv.textContent = 'Formularen er gyldig!';
        successDiv.style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('mail').value = '';
      }
    }

 