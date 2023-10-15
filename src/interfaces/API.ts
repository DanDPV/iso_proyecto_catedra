export interface IAPIListResponseWrapper<ITEM> {
  page: number;
  totalPages: number;
  results: ITEM[];
}
