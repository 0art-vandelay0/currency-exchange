export default class Currency {
    async getCurrencyByCountry(country) {
        try {
            let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${country}`);
            const jsonifiedResponse = await response.json();
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}
                ${jsonifiedResponse.message}`;
                throw new Error(errorMessage);
            }
            return jsonifiedResponse;
        } catch(error) {
            return error;
        }
    }
}