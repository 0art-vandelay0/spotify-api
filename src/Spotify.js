export default class Spotify {

    static async getArtist(artist) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=1`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }

    }