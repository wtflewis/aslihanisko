import axios from 'axios';

export default async function handler(req, res) {
    try {
        // Spotify API'ye erişmek için gerekli bilgiler
        const clientId = '5e5f884c69f74050a8c345d2c9b69159';
        const clientSecret = 'c189bd19a24d4f1bb1fc7b238da581ae';
 
        // Access token almak için gerekli istek
        const tokenResponse = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            },
            params: {
                grant_type: 'client_credentials',
            },
        });

        // Access token
        const accessToken = tokenResponse.data.access_token;

        // Oynatılan şarkıyı almak için gerekli istek
        const currentlyPlayingResponse = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/player/currently-playing',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Oynatılan şarkı bilgileri
        const song = currentlyPlayingResponse.data.item.name;
        const artist = currentlyPlayingResponse.data.item.artists[0].name;
        const album = currentlyPlayingResponse.data.item.album.name;
        const imageUrl = currentlyPlayingResponse.data.item.album.images[0].url;

        // Yanıt olarak şarkı bilgilerini JSON formatında döndürürüz
        res.status(200).json({
            song,
            artist,
            album,
            imageUrl,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
