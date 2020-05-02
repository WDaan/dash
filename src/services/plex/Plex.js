import axios from 'axios'
// media
export default class Plex {
    constructor({ ip, port, token }) {
        this.ip = ip
        this.port = port
        this.token = token
        this.url = `http://${ip}:${port}/status/sessions?X-Plex-Token=${token}`
    }

    async getNumberOfStreams() {
        const { data } = await axios.get(this.url)

        return data.MediaContainer.size
    }

    pad(n) {
        let pad = '00'
        return (pad + n).slice(-pad.length)
    }

    getTvShow(el) {
        return {
            type: el.type,
            show: {
                name: el.grandparentTitle,
                episode: `S${this.pad(el.parentIndex)}E${this.pad(el.index)}`
            },
            art: `http://${this.ip}:${this.port}${el.art}?X-Plex-Token=${this.token}`
        }
    }

    getMovie(el) {
        return {
            type: el.type,
            name: el.title,
            art: `http://${this.ip}:${this.port}${el.art}?X-Plex-Token=${this.token}`
        }
    }

    parseViewers(mediaArray) {
        let viewers = []

        mediaArray.forEach(el => {
            viewers.push({
                name: el.User.title,
                media:
                    el.type == 'movie' ? this.getMovie(el) : this.getTvShow(el)
            })
        })

        return viewers
    }

    async getViewers() {
        const { data } = await axios.get(this.url)
        console.log(data)
        if (data.MediaContainer.size > 0)
            return this.parseViewers(data.MediaContainer.Metadata)
    }
}
