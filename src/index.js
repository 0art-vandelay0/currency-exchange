import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';

// Business Logic

function getCurrencyByCountry(country) {
    Currency.getCurrencyByCountry(country)
        .then(function(response) {
            if (response.conversion_rates) {
                displayResults(response, country);
            } else {
                printError(response, country);
            }
        });
}


// UI Logic

function displayResults(response, country) {
    const currency = response.conversion_rates[country];
    document.getElementById("response").innerHTML = `1 USD = ${currency.toFixed(2)} ${country}`;
}

function printError(response, country) {
    document.getElementById("response").innerHTML = `There was an error handling your exchange request for ${country}.
    Error: ${response.message}`;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const country = document.getElementById('exchange-choice').value;
    document.getElementById("usd-input").value = null;
    document.getElementById("exchange-choice").value = null;
    document.getElementById("response").innerHTML = null;
    getCurrencyByCountry(country);
}

window.addEventListener('load', function() {
    document.getElementById('currency-exchange-form').addEventListener('submit', handleFormSubmit);
});