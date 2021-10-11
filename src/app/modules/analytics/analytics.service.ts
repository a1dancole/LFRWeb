import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from '../shared/models/paginationResponse';
import { BaseHttpClient } from '../shared/services/baseHttpClient.service';
import { Encounter } from './models/encounter';
import { QueryEncounter } from './models/queryEncounters';
import { QueryWings } from './models/queryWings';
import { Wing } from './models/wing';

@Injectable()
export class AnalyticsService extends BaseHttpClient {
  public getEncounters(
    query: QueryEncounter
  ): Observable<PaginationResponse<Encounter>> {
    return this._httpClient.get<PaginationResponse<Encounter>>(
      `${environment.apiUrl}/analytics/encounters?mapId=${query.mapId}&difficultyId=${query.difficultyId}&searchTerm=${query.searchTerm}&PageNumber=${query.pageNumber}&PageSize=${query.pageSize}`
    );
  }

  public getTopThreeGroupsForWing(query: QueryWings): Observable<Wing[]> {
    return this._httpClient.get<Wing[]>(
      `${environment.apiUrl}/analytics/gettopthreegroupsforwing?map=${query.map}&difficulty=${query.difficulty}&wing=${query.wing}`
    );
  }

  public getTopGroupsForWing(query: QueryWings): Observable<Wing[]> {
    return this._httpClient.get<Wing[]>(
      `${environment.apiUrl}/analytics/wings?map=${query.map}&difficulty=${query.difficulty}&wing=${query.wing}`
    );
  }
}
