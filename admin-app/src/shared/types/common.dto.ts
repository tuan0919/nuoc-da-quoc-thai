interface ApiPageResponse<ApiData> {
    result: ApiData;
    page: number;
    total: number;
    limit: number;
    totalPages: number;
}

export type {
    ApiPageResponse
}