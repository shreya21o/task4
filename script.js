document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').classList.remove('hidden');
  this.reset();
});
