import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency.js';

// Business Logic

function getUsdConversions(country, usd) {
    Currency.getUsdConversions()
        .then(function(response) {
            if (response.conversion_rates) {
                Currency.convertCurrency(response, country, usd)
                    .then(function(conversion) {
                        displayConversion(country, usd, conversion);
                    })
                    .catch(function(error) {
                        printError(country, error);
                    });
            } else {
                printError(country, response);
            }
        });
}


// UI Logic


function displayConversion(country, usd, conversion) {
    document.getElementById("response").innerHTML = `${usd} USD = ${conversion} ${country}`;
}

function printError(response, country) {
    document.getElementById("response").innerHTML = `There was an error handling your exchange request for ${country}.
    Error: ${response.message}`;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const usd = document.getElementById('usd-input').value;
    const country = document.getElementById('exchange-choice').value;
    document.getElementById("usd-input").value = null;
    document.getElementById("exchange-choice").value = null;
    document.getElementById("response").innerHTML = null;
    
    getUsdConversions(usd, country);

}

window.addEventListener('load', function() {
    document.getElementById('currency-exchange-form').addEventListener('submit', handleFormSubmit);
});