import { Encounter } from "./encounter";

export interface Wing {
  wingName: string;
  guildName: string;
  timer: number;
  clearDate: Date;
  encounters: Encounter[];
}
