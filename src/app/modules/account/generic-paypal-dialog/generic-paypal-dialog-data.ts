export interface GenericPaypalDialogData {
  itemName: string;
  itemCost: number;
  character: string;
  characterService: CharacterService
}

export enum CharacterService {
  NameChange = 1,
  RaceChange = 2,
  FactionChange = 3
}
