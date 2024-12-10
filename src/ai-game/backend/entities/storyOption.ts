// storyOption.ts

export default class StoryOption {
    choice: string;
    next: string;
  
    constructor(data: { choice: string; next: string }) {
      this.choice = data.choice;
      this.next = data.next;
    }
  }