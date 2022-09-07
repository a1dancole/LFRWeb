import { PaginationRequest } from "../../shared/models/paginationRequest";

export interface QueryPvp extends PaginationRequest {
  searchTerm: string;
}
