const form = document.querySelector("[data-sales-form]");

if (form) {
  const thanks = form.querySelector("[data-sales-thanks]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    if (thanks) thanks.hidden = false;
  });
}
