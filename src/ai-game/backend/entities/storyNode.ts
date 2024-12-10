export default class storyNode {
    id: string;
    text: string;
    fight: boolean;
    options: string[];
    chosenOption: string;
    
    constructor(id: string, text: string, options: string[], fight: boolean) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.fight = fight;
        this.chosenOption = "";
    }
    chooseOption(option: string) {
        this.chosenOption = option;
    }
}