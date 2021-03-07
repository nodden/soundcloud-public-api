declare module namespace {

    export interface Self {
        urn: string;
    }

    export interface Badges {
        pro: boolean;
        pro_unlimited: boolean;
        verified: boolean;
    }

    export interface User {
        avatar_url: string;
        first_name: string;
        followers_count: number;
        full_name: string;
        id: number;
        kind: string;
        last_modified: Date;
        last_name: string;
        permalink: string;
        permalink_url: string;
        uri: string;
        urn: string;
        username: string;
        verified: boolean;
        city: string;
        country_code?: any;
        badges: Badges;
    }

    export interface Format {
        protocol: string;
        mime_type: string;
    }

    export interface Transcoding {
        url: string;
        preset: string;
        duration: number;
        snipped: boolean;
        format: Format;
        quality: string;
    }

    export interface Media {
        transcodings: Transcoding[];
    }

    export interface Badges2 {
        pro: boolean;
        pro_unlimited: boolean;
        verified: boolean;
    }

    export interface User2 {
        avatar_url: string;
        first_name: string;
        followers_count: number;
        full_name: string;
        id: number;
        kind: string;
        last_modified: Date;
        last_name: string;
        permalink: string;
        permalink_url: string;
        uri: string;
        urn: string;
        username: string;
        verified: boolean;
        city: string;
        country_code?: any;
        badges: Badges2;
    }

    export interface Track {
        artwork_url: string;
        caption?: any;
        id: number;
        kind: string;
        last_modified: Date;
        permalink: string;
        permalink_url: string;
        public: boolean;
        secret_token?: any;
        sharing: string;
        title: string;
        uri: string;
        urn: string;
        user_id: number;
        full_duration: number;
        duration: number;
        display_date: Date;
        media: Media;
        monetization_model: string;
        policy: string;
        user: User2;
    }

    export interface comment {
        kind: string;
        id: number;
        body: string;
        created_at: Date;
        timestamp: number;
        track_id: number;
        user_id: number;
        self: Self;
        user: User;
        track: Track;
    }

}