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

function handleFormSubmit(event) {
    event.preventDefault();
    const country = document.getElementById('exchange-choice').value;
    getCurrencyByCountry(country);
}

window.addEventListener('load', function() {
    document.getElementById('currency-form').addEventListener('submit', handleFormSubmit);
});