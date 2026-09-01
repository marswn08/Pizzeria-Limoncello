const form = document.querySelector(".reservation-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xkollyka", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert("Sorry, something went wrong. Please try again.");
    }
  } catch (err) {
    alert("Unable to send reservation. Please try again.");
  }
});

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loading-screen");

    setTimeout(function () {

        loadingScreen.classList.add("fade-out");

    }, 3000);

});
