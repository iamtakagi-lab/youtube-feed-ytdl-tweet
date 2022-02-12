import Parser from 'rss-parser'
import ytdl from 'ytdl-core'
import { env } from './env';
import { getKeep, updateKeep } from './keep';
import { Readable } from 'stream';
import { u, t } from './twitter';
import { CronJob } from 'cron';

const parser = new Parser();

const update = async () => {
    const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${env.CHANNEL_ID}`);
    const last = feed.entries[0]
    const keep = getKeep()
    if(last.link != keep.lastVideoLink) {
        updateKeep({lastVideoLink: last.link})
        const video = getVideo(last.yt_videoid)
        try {
            post(keep.lastVideoLink, video)
        } catch (error) {
            console.error(error)   
        }
    }
}

const getVideo = (videoId: string) => {
    return ytdl(`http://www.youtube.com/watch?v=${videoId}`)
}

const post = async (videoLink: string, video: Readable) => {
    u.post("media/upload", {
        media: video
    }).then(({media_id_string}) => {
        t.post("statuses/update", {
            status: videoLink,
            media_ids: media_id_string
        })
    })
}

const cron = new CronJob(
    env.CRON,
    () => {
      try {
        update();
      } catch (e) {
        console.error(e);
      }
    },
    null,
    false,
    env.TZ
)

cron.start()