import { requestSoundCloud } from '../request/RequestManager'
import { SoundCloudUser } from "../types/User";

async function getUser(userID: number, clientID: string, app_version: string, app_locale: string): Promise<SoundCloudUser> {
    return await requestSoundCloud(`users/${userID}?client_id=${clientID}&app_version=${app_version}&app_locale=${app_locale}`)
}

async function getUserByName(userID: number, clientID: string, app_version: string, app_locale: string): Promise<SoundCloudUser> {
    return await requestSoundCloud(`users/${userID}?client_id=${clientID}&app_version=${app_version}&app_locale=${app_locale}`)
}

export {
    getUser
}