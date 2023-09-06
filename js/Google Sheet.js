const scriptURL =
  "https://script.google.com/macros/s/AKfycbw0tl8qIC8q8Qqk2Arjb5lfSyXN5WXdkPbC_deezmeYjdRUY0bobBFWrfyY86_7nWjH2g/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your email is submitted successfully.👏")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
