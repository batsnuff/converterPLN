{
  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");

  const EUR = 4.33;
  const USD = 4.02;
  const GBP = 5.07;

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
      case "EUR":
        result = amount / EUR;
        break;

      case "USD":
        result = amount / USD;
        break;

      case "GBP":
        result = amount / GBP;
        break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
  });
}
{
  // funkcja zoomu

  function toggleZoomElements() {
    const elements = document.querySelectorAll(
      ".form, .form__fieldset, .form__legend, .form__labelText, .js-amount, .js-currency, .form__button, .js-result"
    );
    const button = document.querySelector(".form__zoom-button");

    elements.forEach((element) => {
      if (element.style.fontSize === "1.5em") {
        element.style.fontSize = "1em";
        element.style.textAlign = "left";
        button.textContent = "Powiększ formularz";
      } else {
        element.style.fontSize = "1.5em";
        element.style.textAlign = "center";
        button.textContent = "Zmniejsz formularz";
      }
    });
  }

  const button = document.querySelector(".form__zoom-button");
  button.addEventListener("click", toggleZoomElements);
}
