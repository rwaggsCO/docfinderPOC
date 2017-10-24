

    export interface Timezone {
        timezone_identifier: string;
        timezone_abbr: string;
        utc_offset_sec: number;
        is_dst: string;
    }

    export interface AcceptableCityName {
        city: string;
        state: string;
    }

    export interface ZipToLocation {
        zip_code: string;
        lat: number;
        lng: number;
        city: string;
        state: string;
        timezone: Timezone;
        acceptable_city_names: AcceptableCityName[];
    }
