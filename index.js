// index.js or your custom script file
const url = 'https://script.google.com/macros/s/AKfycbwEF24t1zULVfJHhTi0Lyg-49hTq2x0Ui85dz5WkxNYG0Bku_imEYRE5cAKbjiDcCWuSw/exec';

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect form data using FormData API
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful', data);
      this.reset(); // Clear the form after submission
    })
    .catch((err) => console.log('Error:', err));
});