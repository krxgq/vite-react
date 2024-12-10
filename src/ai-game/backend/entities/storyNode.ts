// storyNode.ts

import StoryOption from './storyOption';

export default class StoryNode {
  id: string;
  text: string;
  fight: boolean;
  options: StoryOption[];
  chosenOption: string;

  constructor(data: any) {
    this.id = data.id;
    this.text = data.text;
    this.fight = data.fight;
    this.options = data.choices.map((choiceData: any) => new StoryOption(choiceData));
    this.chosenOption = '';
  }

  chooseOption(option: string): void {
    this.chosenOption = option;
  }
}