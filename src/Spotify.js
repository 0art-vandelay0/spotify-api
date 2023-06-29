export default class Spotify {
    static async getCategory() {
        try {
            const response = await fetch(`https://api.spotify.com/v1/browse/categories`, {
                headers: {
                    'Authorization': `Bearer ${process.env.API_KEY}}`
                }
            });
            const jsonifiedResponse = await response.json();
            console.log(jsonifiedResponse);
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                throw new Error(errorMessage);
            }
            return jsonifiedResponse;
        } catch (error) {
            return error;
        }
    }
    
}
