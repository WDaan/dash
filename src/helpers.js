import twemoji from 'twemoji'
import moment from 'moment'

export function emoji(character) {
    return twemoji.parse(character)
}

export function formatTime(value) {
    return moment(value, 'X').format('HH:mm')
}
