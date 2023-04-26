{
  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");

  const EUR = 4.78;
  const USD = 4.47;
  const GBP = 5.37;

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
      case "EUR":
        result = amount / EUR;
        
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
