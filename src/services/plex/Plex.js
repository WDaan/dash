import axios from 'axios'

class Plex {
    async getNumberOfStreams() {
        const response = await axios.get(
            `http://${process.env.VUE_APP_PLEX_IP}:${process.env.VUE_APP_PLEX_PORT}/status/sessions?X-Plex-Token=${process.env.VUE_APP_PLEX_TOKEN}`
        )

        return response.data['MediaContainer'].size
    }
}

export default new Plex()
