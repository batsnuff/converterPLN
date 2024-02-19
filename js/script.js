const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const EUR = 4.33;
const USD = 4.02;
const GBP = 5.07;
{
  function calculateResult(amount, currency) {
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

    return result.toFixed(2);
  }
}

function updateResultDisplay(result, currency) {
  resultElement.innerText = `${result} ${currency}`;
}
{
  function onFormSubmit(event) {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);
    updateResultDisplay(result, currency);
  }

  // add event listener to form
  formElement.addEventListener("submit", onFormSubmit);
}
{
  // zoomu function

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
