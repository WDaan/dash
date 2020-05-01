<template>
    <Tile :position="position">
        <h1>Plex</h1>
        <div class="flex">
            <div class="m-auto">
                <h2>Number of Streams: {{ count }}</h2>
            </div>
        </div>
    </Tile>
</template>

<script>
import Tile from '@/components/Tile'
import plex from '@/services/plex/Plex'
export default {
    name: 'PlexTile',
    components: { Tile },
    props: {
        position: String
    },
    data() {
        return {
            count: 0
        }
    },
    created() {
        this.getNumberOfStreams()
        setInterval(this.getNumberOfStreams, 10000)
    },
    methods: {
        async getNumberOfStreams() {
            this.count = await plex.getNumberOfStreams()
        }
    }
}

// // get the number of users, en userdata if necessary
// function parse_plex_json(json): Viewers {
//   let viewers = new Viewers()
//   const num_active_users = json.MediaContainer._attributes.size
//   viewers.num = num_active_users
//   if (num_active_users > 0) {
//     viewers = parse_user_info(json, viewers)
//   }
//   return viewers
// }
// 
// // get the name of the active plex users
// function parse_user_info(json, viewers: Viewers): Viewers {
//   // parse songs
//   try {
//     const Tracks = json.MediaContainer.Track
//     let nTrack = Tracks.length
//     if (nTrack === undefined) {
//       nTrack = 1
//     }
//     if (nTrack === 1) {
//       const m = get_maker(Tracks)
//       const usr = new User(Tracks.User._attributes.title, m)
//       viewers.add_user(usr)
//     } else if (nTrack > 1) {
//       for (let i = 0; i < nTrack; i++) {
//         const m = get_maker(Tracks[i])
//         const usr = new User(Tracks[i].User._attributes.title, m)
//         viewers.add_user(usr)
//       }
//     }
//   } catch (err) {
//     // console.log('no songs');
//   }

//   // parse videos
//   try {
//     const Videos = json.MediaContainer.Video
//     let nVideo = Videos.length
//     if (nVideo === undefined) {
//       nVideo = 1
//     }
//     // console.log("Videos: " + nVideo);
//     if (nVideo === 1) {
//       const m = get_maker(Videos)
//       const usr = new User(Videos.User._attributes.title, m)
//       viewers.add_user(usr)
//     } else if (nVideo > 1) {
//       for (let i = 0; i < nVideo; i++) {
//         const m = get_maker(Videos[i])
//         const usr = new User(Videos[i].User._attributes.title, m)
//         viewers.add_user(usr)
//       }
//     }
//   } catch (err) {
//     // console.log('no vids');
//   }
//   return viewers
// }

// // get info on the media that's playing
// function get_maker(info): Media {
//   let maker: string
//   let title
//   let type
//   switch (info._attributes.type) {
//     case 'track':
//       type = 'Music'
//       maker = info._attributes.grandparentTitle
//       title = info._attributes.title
//       break
//     case 'episode':
//       type = 'Serie'
//       maker = info._attributes.grandparentTitle
//       maker +=
//         ' (' +
//         info._attributes.parentTitle.substring(0, 1) +
//         info._attributes.parentTitle.substring(
//           info._attributes.parentTitle.length - 2,
//           info._attributes.parentTitle.length,
//         ) +
//         'E' +
//         info._attributes.index +
//         ')'
//       title = info._attributes.title
//       break
//     case 'movie':
//       type = 'Movie'
//       maker = info._attributes.title
//       title = ''
//       break
//   }
//   return new Media(type, maker, title)
// }
</script>
<style scoped>
h1,
h2 {
    font-family: 'Inter', arial, sans-serif;
}

h1 {
    font-size: 35px;
    font-weight: 300;
}
h2 {
    font-size: 20px;
    font-weight: 300;
}
</style>
