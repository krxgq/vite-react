export interface StoryOption {
  choiceText: string;
  nextNodeId: string;
}

export interface StoryNode {
  id: string;
  text: string;
  fight: boolean;
  options: StoryOption[];
  chosenOption?: string;
}