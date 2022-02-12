if (!process.env.TWITTER_CK) throw new Error("環境変数 TWITTER_CK が未設定です。");
if (!process.env.TWITTER_CS) throw new Error("環境変数 TWITTER_CS が未設定です。");
if (!process.env.TWITTER_AT) throw new Error("環境変数 TWITTER_AT が未設定です。");
if (!process.env.TWITTER_ATS) throw new Error("環境変数 TWITTER_ATS が未設定です。");
if (!process.env.CHANNEL_ID) throw new Error("環境変数 CHANNEL_ID が未設定です。");
if (!process.env.TZ) throw new Error("環境変数 TZ が未設定です。");
if (!process.env.CRON) throw new Error("環境変数 CRON が未設定です。");

type Env = {
    TWITTER_CK: string
    TWITTER_CS: string
    TWITTER_AT: string
    TWITTER_ATS: string
    CHANNEL_ID: string
    TZ: string
    CRON: string
}

const env: Env = {
    TWITTER_CK: process.env.TWITTER_CK,
    TWITTER_CS: process.env.TWITTER_CS,
    TWITTER_AT: process.env.TWITTER_AT,
    TWITTER_ATS: process.env.TWITTER_ATS,
    CHANNEL_ID: process.env.CHANNEL_ID,
    TZ: process.env.TZ,
    CRON: process.env.CRON,
}

export { env }