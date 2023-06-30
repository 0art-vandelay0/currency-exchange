export default class Currency {
    static async getUsdConversions() {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
            const jsonifiedResponse = await response.json();
            console.log(jsonifiedResponse.conversion_rates);
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}
                    ${jsonifiedResponse.message}`;
                throw new Error(errorMessage);
            }
            return jsonifiedResponse;
        } catch (error) {
            return error;
        }
    }

    static async convertCurrency(response, country, usd) {
        try {
            if (response.conversion_rates) {
                const currency = response.conversion_rates[country];
                const conversion = (currency * usd).toFixed(2);
                return conversion;
            } else {
                throw new Error(response);
            }
        } catch (error) {
            throw new Error(`There was an error handling your exchange request for ${country}. Error: ${error}`);
        }
    }
}