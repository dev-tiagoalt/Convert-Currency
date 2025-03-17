const convertButton = document.querySelector(".Convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.querySelector(".currency-name")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValueToConverted = document.querySelector(".currency-value")//outras moedas
    console.log(currencySelect.value)
    const dolarToday = 5.78
    const euroToday = 6.37
    const Libra = 7.41


    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
   
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
   
    if (currencySelect.value == "₿ Bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / Libra )
    }
    
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".logo-usa")
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "R$ Real") {
        currencyName.innerHTML = "R$ Real Brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }
    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)