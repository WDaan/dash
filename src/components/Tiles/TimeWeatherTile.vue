<template>
    <Tile :position="position" no-fade>
        <div
            class="grid gap-2 justify-items-center h-full"
            style="grid-template-rows: auto 1fr auto;"
        >
            <div>
                <h1 style="font-size:15px;">{{ date }}</h1>
            </div>
            <div
                class="align-self-center font-bold text-4xl tracking-wide leading-none"
            >
                {{ time }}
            </div>
            <div class="uppercase">
                <div
                    class="grid gap-4 items-center"
                    style="grid-template-columns: repeat(2, auto);"
                >
                    <span style="font-size: 20px">
                        {{ weather.temperature }}°
                    </span>

                    <span style="width: 35px;" v-html="weather.icons[0]"></span>
                </div>
                <div class="uppercase mt-4">{{ weatherCity }}</div>
            </div>
        </div>
    </Tile>
</template>

<script>
import { emoji } from '../../helpers'
import moment from 'moment-timezone'
import weather from '@/services/weather/Weather'
export default {
    name: 'TimeWeatherTile',
    props: {
        weatherCity: {
            type: String
        },
        dateFormat: {
            type: String,
            default: 'DD-MM-YYYY'
        },
        timeFormat: {
            type: String,
            default: 'HH:mm'
        },
        timeZone: {
            type: String
        },
        position: {
            type: String
        }
    },
    data() {
        return {
            date: '',
            time: '',
            weather: {
                temperature: '',
                icons: []
            },
            rainForecasts: []
        }
    },
    created() {
        this.refreshTime()
        setInterval(this.refreshTime, 1000)
        this.fetchWeather()
        setInterval(this.fetchWeather, 15 * 60 * 1000)
    },
    methods: {
        emoji,
        refreshTime() {
            this.date = moment()
                .tz(this.timeZone)
                .format(this.dateFormat)
            this.time = moment()
                .tz(this.timeZone)
                .format(this.timeFormat)
        },
        getEventHandlers() {
            return {
                'Buienradar.ForecastsFetched': response => {
                    this.rainForecasts = response.forecasts
                }
            }
        },
        async fetchWeather() {
            const condition = await weather.forCity(this.weatherCity)
            let icons = []
            condition.weather
                .slice(0, 1) // There's not enough room for > 1 emoji -> only display the first weather condition
                .forEach(weatherCondition => {
                    const isNight = weatherCondition.icon.includes('n')
                    const icon = weather.getEmoji(weatherCondition.id, isNight)
                    icons.push(emoji(icon))
                })
            this.weather.temperature = condition.main.temp.toFixed(1)
            this.weather.icons = icons
        }
    }
}
</script>
