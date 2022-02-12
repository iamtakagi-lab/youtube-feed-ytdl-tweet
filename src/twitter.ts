import Twitter from "twitter-lite";
import { env } from "./env";

const u = new Twitter({
    subdomain: "upload",
    consumer_key: env.TWITTER_CK ?? "",
    consumer_secret: env.TWITTER_CS ?? "",
    access_token_key: env.TWITTER_AT,
    access_token_secret: env.TWITTER_ATS,
});

const t = new Twitter({
    consumer_key: env.TWITTER_CK,
    consumer_secret: env.TWITTER_CS,
    access_token_key: env.TWITTER_AT,
    access_token_secret: env.TWITTER_ATS,
});

export { u, t }