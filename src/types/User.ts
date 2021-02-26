export interface SoundCloudUser {
    avatar_url: string
    city: string
    first_name: string
    followers_count: number
    country_code: any
    full_name: string
    last_name: string
    id: number
    kind: string
    last_modified: string
    permalink: string
    permalink_url: string
    uri: string
    urn: string
    username: string
    verified: boolean
    badges: Badges
}

export interface SoundCloudUserProfile extends SoundCloudUser {
    comments_count: number
    created_at: string
    creator_subscriptions: CreatorSubscription[]
    creator_subscription: CreatorSubscription2
    description: string
    followings_count: number
    groups_count: number
    likes_count: number
    playlist_likes_count: number
    playlist_count: number
    reposts_count: any
    track_count: number
    visuals: Visuals
}

export interface Badges {
    pro: boolean;
    pro_unlimited: boolean;
    verified: boolean;
}

export interface CreatorSubscription {
    product: Product
}

export interface Product {
    id: string
}

export interface CreatorSubscription2 {
    product: Product2
}

export interface Product2 {
    id: string
}

export interface Visuals {
    urn: string
    enabled: boolean
    visuals: Visual[]
    tracking: any
}

export interface Visual {
    urn: string
    entry_time: number
    visual_url: string
}
