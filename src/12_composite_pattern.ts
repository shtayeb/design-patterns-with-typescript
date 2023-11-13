/**
 * Composite Pattern:
 * Composes objects into tree structures to represent part-whole hierarchies,
 * composite lets clients treat individual objects and compositions of objects uniformly.
 */

// Component
interface TodoList {
  getHtml(): string;
}

// Composite - has sub-todo
class Project implements TodoList {
  title: string = '';
  todos: Todo[] = [];

  constructor(title: string,todos:Todo[]) {
    this.title = title;
    this.todos = todos
  }

  getHtml(): string {
    let html = "<ul style='color:red'>";

    html += this.title
    html += "<ul>"

    this.todos.forEach(todo => {
        html += "<li>"
        html += todo.getHtml()
        html += "</li>"
    });

    html += "</ul></ul>"

    return html;
  }
}

// leaf
class Todo implements TodoList {
  text: string = '';

  constructor(text: string) {
    this.text = text;
  }

  getHtml(): string {
    return this.text;
  }
}

const todo1 = new Todo('Todo 1')
const todo2 = new Todo('Todo 2')
const todo3 = new Todo('Todo 3')
const todo4 = new Todo('Todo 4')
const todo5 = new Todo('Todo 5')
const todo6 = new Todo('Todo 6')
const todo7 = new Todo('Todo 7')

const p1 = new Project('Build Portfolio',[todo1,todo2,todo3])

console.log(p1.getHtml());