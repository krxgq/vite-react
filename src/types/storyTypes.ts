export interface StoryOption {
  choiceText: string;
  nextNodeId: string;
}

export interface StoryNode {
  id: string;
  text: string;
  options: StoryOption[];
}