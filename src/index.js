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
    if (isNaN(conversion)) {
        printError(country, new Error(`The currency "${country}" doesn't exist.`));
    } else {
        const percentage = ((usd / conversion) * 100).toFixed(0);
        document.getElementById("response").innerHTML = `${usd} USD = ${conversion} ${country}<br>
        That's about ${percentage}% up against the USD.`;
        if (percentage > 100) {
            document.getElementById("response").innerHTML += `<br>That's more expensive!`;
        } else if (percentage < 100 && percentage > 75) {
            document.getElementById("response").innerHTML += `<br>That's a little cheaper.`;
        } else if (percentage <= 75 && percentage > 50) {
            document.getElementById("response").innerHTML += `<br>That's a lot cheaper!`;
        } else if (percentage <= 50){
            document.getElementById("response").innerHTML += `<br>Damn, that will go a lot further!`;
        } else {
            document.getElementById("response").innerHTML += `<br>That's about the same.`;
        }
    }
}

function printError(country, error) {
    document.getElementById("response").innerHTML = `There was an error handling your exchange request for ${country}.
        Error: ${error.message}`;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const usd = document.getElementById('usd-input').value;
    const country = document.getElementById('exchange-choice').value;
    document.getElementById("usd-input").value = null;
    document.getElementById("exchange-choice").value = null;
    document.getElementById("response").innerHTML = null;

    getUsdConversions(country, usd);
}

window.addEventListener('load', function() {
    document.getElementById('currency-exchange-form').addEventListener('submit', handleFormSubmit);
});