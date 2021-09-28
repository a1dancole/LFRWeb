import { GroupMember } from "./groupMember";

export interface Encounter {
  bossName: string;
  mapName: string;
  wingName: string;
  difficulty: string;
  killTime: number;
  guildName: string;
  groupMembers: GroupMember[];
}
