particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

const modal = document.querySelector("#contactModal");
const contactButton = document.querySelector(".contact-button");
const closeButton = document.querySelector(".close-button");

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});
closeButton.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// Hide modal when clicking outside of content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const name = "Korbin Hillan"; // Your name or recipient's name
  const from_name = document.getElementById("name").value; // Sender's name
  const email = document.getElementById("email").value; // Sender's email
  const message = document.getElementById("message").value; // Message content

  // Log data for debugging
  console.log("Sending data:", { name, from_name, email, message });

  // Send email using EmailJS
  emailjs
    .send("service_3iwae0n", "template_h84m4xo", {
      name: name,           // Matches {{name}} in template
      from_name: from_name, // Matches {{from_name}} in template
      email: email,         // Matches {{email}} in template
      message: message,     // Matches {{message}} in template
    })
    .then(
      (response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        alert("Failed to send email. Check console for details.");
        console.error("FAILED...", error);
      }
    );
});
