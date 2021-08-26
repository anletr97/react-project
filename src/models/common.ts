export interface PaginationParams {
  _linmit: number;
  _page: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
}
