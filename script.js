
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, such as sending an AJAX request.
    // For demonstration purposes, let's just log the form data.
    const formData = new FormData(this);
    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
    // Optionally, you can clear the form fields after submission.
    this.reset();
  });
  