import plex from '@/services/plex/plex'

describe('Plex Service', () => {
    test('get number of plex streams', async () => {
        const num = await plex.getNumberOfStreams()

        expect(typeof num).toBe('number')
    })
})
