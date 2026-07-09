const form = document.querySelector(".reservation-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

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
});
