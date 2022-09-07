import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationResponse } from '../shared/models/paginationResponse';
import { BaseHttpClient } from '../shared/services/baseHttpClient.service';
import { Achievement } from './models/achievement';
import { ActivePlayers } from './models/activePlayers';
import { ClassBreakdown } from './models/classBreakdown';
import { Encounter } from './models/encounter';
import { OtherBreakdowns } from './models/otherBreakdowns';
import { PvpKill, PvpKills } from './models/pvpKills';
import { QueryAchievements } from './models/queryAchievement';
import { QueryEncounter } from './models/queryEncounters';
import { QueryPvp } from './models/queryPvp';
import { QueryWings } from './models/queryWings';
import { Wing } from './models/wing';

@Injectable()
export class AnalyticsService extends BaseHttpClient {
  public getEncounters(query: QueryEncounter): Observable<PaginationResponse<Encounter[]>> {
    return this._httpClient.get<PaginationResponse<Encounter[]>>(
      `${environment.apiUrl}/analytics/encounters?mapId=${query.mapId}&difficultyId=${query.difficultyId}&hardmode=${query.hardMode}&searchTerm=${query.searchTerm}&PageNumber=${query.pageNumber}&PageSize=${query.pageSize}`
    );
  }

  public getAchievements(query: QueryAchievements): Observable<PaginationResponse<Achievement[]>> {
    return this._httpClient.get<PaginationResponse<Achievement[]>>(
      `${environment.apiUrl}/analytics/achievements?searchterm=${query.searchTerm}&PageNumber=${query.pageNumber}&PageSize=${query.pageSize}`
    );
  }

  public getTopThreeGroupsForWing(query: QueryWings): Observable<Wing[]> {
    return this._httpClient.get<Wing[]>(
      `${environment.apiUrl}/analytics/gettopthreegroupsforwing?map=${query.map}&difficulty=${query.difficulty}&wing=${query.wing}&hardmode=${query.hardMode}`
    );
  }

  public getTopGroupsForWing(query: QueryWings): Observable<Wing[]> {
    return this._httpClient.get<Wing[]>(
      `${environment.apiUrl}/analytics/wings?map=${query.map}&difficulty=${query.difficulty}&wing=${query.wing}&hardmode=${query.hardMode}`
    );
  }

  public getActivePlayers(): Observable<ActivePlayers[]> {
    return this._httpClient.get<ActivePlayers[]>(
      `${environment.apiUrl}/analytics/getactiveplayers`
    );
  }

  public getClassBreakdown(): Observable<ClassBreakdown[]> {
    return this._httpClient.get<ClassBreakdown[]>(
      `${environment.apiUrl}/analytics/getclassbreakdown`
    );
  }

  public getOtherBreakdowns(): Observable<OtherBreakdowns[]> {
    return this._httpClient.get<OtherBreakdowns[]>(
      `${environment.apiUrl}/analytics/getotherbreakdowns`
    );
  }

  public queryPvp(query: QueryPvp): Observable<PaginationResponse<PvpKills>> {
    return this._httpClient.get<PaginationResponse<PvpKills>>(
      `${environment.apiUrl}/analytics/pvp?searchterm=${query.searchTerm}&PageNumber=${query.pageNumber}&PageSize=${query.pageSize}`
    );
  }
}
