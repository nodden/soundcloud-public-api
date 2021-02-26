import fetch from "node-fetch";

const soundcloudAPIV2 = "https://api-v2.soundcloud.com/";

async function requestSoundCloud(path: String): Promise<any> {
    try {
        return await fetch(soundcloudAPIV2 + path)
            .then(website => website.text())
            .then(data => data);
    } catch (error) {
        console.log(error);
    }

}


export {
    requestSoundCloud
}