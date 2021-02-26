import { requestSoundCloud } from '../request/RequestManager'
import { SoundCloudUserProfile } from "../types/User";

async function getUser(userID: number, clientID: string, app_version: string, app_locale: string): Promise<SoundCloudUserProfile> {
    return await requestSoundCloud(`users/${userID}?client_id=${clientID}&app_version=${app_version}&app_locale=${app_locale}`)
}

async function getComments(userID: number, clientID: string, threaded: number, filterReplies: number, offset: number, linked_partitioning: number = 0,
                           app_version: string, app_locale: string): Promise<SoundCloudUserProfile> {
    return await requestSoundCloud(`users/${userID}/comments?
    client_id=${clientID}
    &threaded=${threaded}
    &filter_replies=${filterReplies}
    &offset=${offset}
    &linked_partitioning=${linked_partitioning}
    &app_version=${app_version}
    &app_locale=${app_locale}
    `)
}

export {
    getUser,
    getComments
}