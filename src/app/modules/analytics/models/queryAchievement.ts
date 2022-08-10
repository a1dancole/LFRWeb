import { PaginationRequest } from "../../shared/models/paginationRequest";

export interface QueryAchievements extends PaginationRequest {
  searchTerm: string;
}
