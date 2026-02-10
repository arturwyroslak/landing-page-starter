(function(){
  'use strict';

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if(!form){
    // Fail early if the form is not present to avoid runtime errors
    console.warn('[landing-page] contactForm element not found');
    if(status) status.textContent = '';
    return;
  }

  function isValidEmail(email){
    // Simple, lenient email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    try{
      if(status) status.textContent = 'Wysyłam...';

      const data = {
        name: (form.name && form.name.value || '').trim(),
        email: (form.email && form.email.value || '').trim(),
        message: (form.message && form.message.value || '').trim()
      };

      if(!data.name || !data.email || !data.message){
        if(status) status.textContent = 'Proszę wypełnić wszystkie pola.';
        return;
      }

      if(!isValidEmail(data.email)){
        if(status) status.textContent = 'Proszę podać poprawny adres email.';
        return;
      }

      // Placeholder: tutaj wyślij request do backendu lub usługi form
      setTimeout(function(){
        if(status) status.textContent = 'Dziękujemy — wiadomość została wysłana.';
        form.reset();
      },700);

    }catch(err){
      console.error('[landing-page] Form submit error', err);
      if(status) status.textContent = 'Wystąpił błąd. Spróbuj ponownie później.';
    }
  });
})();
