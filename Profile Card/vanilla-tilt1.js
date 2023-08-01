// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the card element
  const card = document.querySelector(".card");

  // Add an event listener to the card for the hover effect
  card.addEventListener("mouseenter", () => {
    // Scale up the card on hover
    card.style.transform = "scale(1.1)";
  });

  card.addEventListener("mouseleave", () => {
    // Scale down the card when the mouse leaves
    card.style.transform = "scale(1)";
  });

  // Get a reference to the "Contact Me" button
  const contactBtn = document.querySelector(".btn");

  // Add a click event listener for the button animation
  contactBtn.addEventListener("click", () => {
    // Add a class to trigger the animation
    contactBtn.classList.add("btn-animation");

    // Remove the class after a short delay to reset the animation
    setTimeout(() => {
      contactBtn.classList.remove("btn-animation");
    }, 500); // Adjust the delay (in milliseconds) to match your CSS animation duration
  });
});
