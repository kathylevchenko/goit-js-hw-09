const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const downloadForm = () => {
  const saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', saveForm);

window.addEventListener('load', downloadForm);

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  if (form.elements.email.value.trim() === '') {
    alert('Please enter your email');
    return form.reset
  }
  if (form.elements.message.value.trim() === '') {
    alert('Please enter your message');
    return form.reset
  }
 
  console.log({
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  });

  form.reset();
});
