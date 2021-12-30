import { Character } from "./character";

export interface UserProfile {
  id: number;
  username: string;
  isContributor: boolean;
  characters: Character[];
}
