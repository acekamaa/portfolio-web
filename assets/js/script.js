// Simple confirmation on contact submit
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message functionality will be connected to backend soon.');
});

document.querySelector('#year').textContent = new Date().getFullYear();
