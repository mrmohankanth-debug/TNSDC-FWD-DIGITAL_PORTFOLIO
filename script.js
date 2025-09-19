// Scroll to section on button click

function scrollToSection(sectionId) {

  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

}

// Contact form fake submission

document.getElementById('contactForm').addEventListener('submit', function(e) {

  e.preventDefault();

  document.getElementById('successMsg').textContent = "Thank you! Your message has been sent.";

  this.reset();

});