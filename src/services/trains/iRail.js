import axios from 'axios'
// media
export default class iRail {
    constructor({ from, to }) {
        this.from = from
        this.to = to
        this.url = `https://api.irail.be/connections?from=${from}&to=${to}&format=json&lang=nl`
    }

    async getInfo() {
        const { data } = await axios.get(this.url)
        return data
    }
}
