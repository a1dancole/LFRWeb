import { PaginationRequest } from "../../shared/models/paginationRequest";

export interface QueryEncounter extends PaginationRequest {
  mapId: number;
  difficultyId: number;
  searchTerm: string;
  hardMode: boolean;
}
