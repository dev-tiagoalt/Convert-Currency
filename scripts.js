const convertButton = document.querySelector(".Convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.querySelector(".currency-name")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValueToConverted = document.querySelector(".currency-value")//outras moedas
    
    const realToday = 1
    const dolarToday = 5.78
    const euroToday = 6.37
    const LibraToday = 7.41
    const bitcoinToday = 471026.12

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

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
    
    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-uk", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday )
    }
    if (currencySelect.value == "₿ Bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday )
    }
    if (currencySelect.value == "R$ Real Brasileiro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday )
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
    if (currencySelect.value == "R$ Real Brasileiro") {
        currencyName.innerHTML = "R$ Real Brasileiro"
        currencyImage.src = "./assets/brasil.png"
    }
    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)