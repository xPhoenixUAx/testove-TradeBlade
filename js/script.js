document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button-form");
  const alertBox = document.getElementById("custom-alert");
  const closeButton = document.querySelector(".alert-close");

  button.addEventListener("click", function (event) {
    event.preventDefault();
    alertBox.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    alertBox.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // 2 секунди
      const step = target / (duration / 16); // 60 fps

      function updateCounter() {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + step);
          setTimeout(updateCounter, 16);
        } else {
          counter.innerText = target;
        }
      }

      updateCounter();
    });
  }

  animateCounters();
});
