import axios from 'axios'

export default class Weather {
    constructor(token) {
        this.token = token
    }

    async forCity(city) {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.token}&units=metric`
        )

        return response.data
    }

    getEmoji(weatherId, isNight) {
        const group = parseInt(weatherId.toString().charAt(0))

        if (group === 2) {
            return '⛈'
        }

        if (group === 3) {
            return '☔'
        }

        if (group === 5) {
            return '☔'
        }

        if (group === 6) {
            return '☃'
        }

        if (weatherId >= 700 && weatherId <= 762) {
            return '🌫'
        }

        if (weatherId === 781) {
            return '🌪'
        }

        if (weatherId === 771) {
            return '💨'
        }

        if (weatherId === 800) {
            return isNight ? '🌌' : '☀'
        }

        if (weatherId === 801) {
            return '⛅'
        }

        if (group === 8) {
            return '☁'
        }

        return '🧐'
    }
}
