import axios from 'axios'

export default class Plex {
    constructor({ ip, port, token }) {
        this.url = `http://${ip}:${port}/status/sessions?X-Plex-Token=${token}`
    }

    async getNumberOfStreams() {
        const response = await axios.get(this.url)

        return response.data['MediaContainer'].size
    }
}
