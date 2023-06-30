export default class Currency {
    
    static async getUsdConversions() {
        try {
            let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
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

}