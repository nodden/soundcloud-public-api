import fetch from "node-fetch";

const soundcloudAPIV2 = "https://api-v2.soundcloud.com/";

async function requestSoundCloud(path: String): Promise<any> {
    return await fetch(soundcloudAPIV2 + path)
        .then(website => website.json())
        .then(data => data)
}


export {
    requestSoundCloud
}