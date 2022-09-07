export interface PvpKill {
  characterName: string;
  class: string;
  race: string;
  killCount: number;
}

export interface PvpKills {
  maxKillCount: number;
  pvpKills: PvpKill[];
}
