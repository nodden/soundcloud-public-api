import { requestSoundCloud } from '../request/RequestManager'
import { SoundCloudUserProfile } from "../types/User";

async function getUser(userID: number, clientID: string, app_version: string, app_locale: string): Promise<SoundCloudUserProfile> {
    return await requestSoundCloud(`users/${userID}?client_id=${clientID}&app_version=${app_version}&app_locale=${app_locale}`)
}

// todo change any to actual response
async function getComments(userID: number, clientID: string, limit: number, offset: number, linked_partitioning: number, filterReplies: number,
                           app_version: string, app_locale: string): Promise<any> {
    return await requestSoundCloud(`users/${userID}/comments?client_id=${clientID}&limit=${limit}&offset=${offset}&linked_partitioning=${linked_partitioning}&app_version=${app_version}&app_locale=${app_locale}`)
}

export {
    getUser,
    getComments
}