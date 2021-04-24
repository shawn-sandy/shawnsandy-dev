// contact form/update 05/march/2020

const handleSubmit = (e) => {
  e.preventDefault()
  const myForm = document.getElementById('contact-us')
  const formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}
document.querySelector('form').addEventListener('submit', handleSubmit)
