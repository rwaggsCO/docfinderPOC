export interface ProviderSearchResult {
    meta: Meta;
    data?: (DataEntity)[] | null;
}
export interface Meta {
    data_type: string;
    item_type: string;
    total: number;
    count: number;
    skip: number;
    limit: number;
}
export interface DataEntity {
    practices?: (PracticesEntity)[] | null;
    educations?: (null)[] | null;
    profile: Profile;
    ratings?: (RatingsEntity | null)[] | null;
    insurances?: (InsurancesEntity)[] | null;
    specialties?: (SpecialtiesEntity)[] | null;
    claims?: (ClaimsEntity)[] | null;
    licenses?: (LicensesEntity | null)[] | null;
    uid: string;
    npi: string;
}
export interface PracticesEntity {
    location_slug: string;
    within_search_area: boolean;
    distance: number;
    lat: number;
    lon: number;
    uid: string;
    name: string;
    accepts_new_patients: boolean;
    insurance_uids?: (string | null)[] | null;
    visit_address: VisitAddress;
    office_hours?: (null)[] | null;
    phones?: (PhonesEntity)[] | null;
    languages?: (LanguagesEntity)[] | null;
    website?: string | null;
}
export interface VisitAddress {
    city: string;
    lat: number;
    lon: number;
    state: string;
    state_long: string;
    street: string;
    zip: string;
    street2?: string | null;
}
export interface PhonesEntity {
    number: string;
    type: string;
}
export interface LanguagesEntity {
    name: string;
    code: string;
}
export interface Profile {
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    slug: string;
    title?: string | null;
    image_url: string;
    gender?: string | null;
    languages?: (LanguagesEntity)[] | null;
    bio: string;
}
export interface RatingsEntity {
    active: boolean;
    provider: string;
    provider_uid: string;
    rating: number;
    review_count: number;
    image_url_small: string;
    image_url_small_2x: string;
    image_url_large: string;
    image_url_large_2x: string;
}
export interface InsurancesEntity {
    insurance_plan: InsurancePlan;
    insurance_provider: InsuranceProvider;
}
export interface InsurancePlan {
    uid: string;
    name: string;
    category?: (string)[] | null;
}
export interface InsuranceProvider {
    uid: string;
    name: string;
}
export interface SpecialtiesEntity {
    uid: string;
    name: string;
    description: string;
    category: string;
    actor: string;
    actors: string;
}
export interface ClaimsEntity {
    hcpcs: string;
    hcpcs_description: string;
    service_cnt: number;
    bene_uniq_cnt: number;
    avg_allowed_amt: number;
    avg_charge_amt: number;
    avg_payment_amt: number;
}
export interface LicensesEntity {
    number: string;
    state: string;
    end_date?: string | null;
}
