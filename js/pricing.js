(() => {
  const calculator = document.querySelector("[data-pricing-calculator]");
  if (!calculator) return;

  const rooms = calculator.querySelector("input");
  const total = document.getElementById("professional-total");
  const count = document.querySelector("[data-room-count]");
  const error = document.getElementById("professional-rooms-error");
  const rate = Number(calculator.dataset.roomRate);

  const updateEstimate = () => {
    const quantity = rooms.valueAsNumber;
    const valid = rooms.validity.valid && Number.isSafeInteger(quantity) &&
      Number.isSafeInteger(quantity * rate);

    error.hidden = valid;
    rooms.setAttribute("aria-invalid", String(!valid));

    if (!valid) {
      total.value = "—";
      count.textContent = "—";
      return;
    }

    const locale = document.documentElement.lang === "es" ? "es-PE" : "en-US";
    const format = new Intl.NumberFormat(locale);
    total.value = `S/${format.format(quantity * rate)}`;
    count.textContent = format.format(quantity);
  };

  rooms.addEventListener("input", updateEstimate);
  document.addEventListener("hostera:languagechange", updateEstimate);
  updateEstimate();
  calculator.hidden = false;
})();
