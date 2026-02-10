document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Wysyłam...';
  // prosta walidacja
  const form = e.target;
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  if(!data.name || !data.email || !data.message){
    status.textContent = 'Proszę wypełnić wszystkie pola.';
    return;
  }
  // Placeholder: tutaj wyślij request do backendu lub usługi form
  setTimeout(function(){
    status.textContent = 'Dziękujemy — wiadomość została wysłana.';
    form.reset();
  },700);
});
