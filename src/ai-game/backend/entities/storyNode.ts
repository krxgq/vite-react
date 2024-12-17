import { StoryNode } from "../types/storyTypes";

export function chooseOption(node: StoryNode, option: string): void {
  node.chosenOption = option;
}