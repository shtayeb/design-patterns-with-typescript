// Receiver: the actual object that performs the action
class TextEditor {
  private text: string = "";

  public addText(text: string): void {
    this.text += text;
  }

  public deleteLastWord() {
    let lastWordIndex = this.text.lastIndexOf(" ");
    this.text = this.text.substring(0, lastWordIndex);
  }

  public getText() {
    return this.text;
  }
}

// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Concrete command classes
class AddTextCommand implements Command {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): void {
    this.editor.addText(this.text);
  }

  undo(): void {
    this.editor.deleteLastWord();
  }
}

class DeleteLastWordCommand implements Command {
  private editor: TextEditor;
  private lastWord: string;

  constructor(editor: TextEditor) {
    this.editor = editor;
    this.lastWord = this.getLastWord();
  }

  execute(): void {
    this.editor.deleteLastWord();
  }

  undo(): void {
    this.editor.addText(this.lastWord);
  }

  getLastWord(): string {
    let lastWordIndex = this.editor.getText().lastIndexOf(" ");
    let lastWord = this.editor.getText().substring(lastWordIndex);
    return lastWord;
  }
}

// Invoker
class TextEditorInvoker {
  private commandHistory: Command[] = [];
  private editor: TextEditor;

  constructor(editor: TextEditor) {
    this.editor = editor;
  }

  public executeCommand(command: Command) {
    command.execute();
    this.commandHistory.push(command);
  }

  public undo() {
    let command = this.commandHistory.pop();
    if (command) {
      command.undo();
    }
  }

  public getCommandHistory() {
    return this.commandHistory;
  }
}

// usage

let editor = new TextEditor();
let invoker = new TextEditorInvoker(editor);

invoker.executeCommand(new AddTextCommand(editor, "Hello "));
invoker.executeCommand(new AddTextCommand(editor, "World!"));
invoker.executeCommand(new DeleteLastWordCommand(editor));

console.log(editor.getText()); // Output: "Hello "

invoker.undo();

console.log(editor.getText()); // Output: "Hello world! "
