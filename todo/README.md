# React Todo App - README

## Introduction

This is a simple React Todo App that allows users to manage their tasks. The application has one main page, the Home Page, where users can view a list of all existing todos with their titles and statuses. Users can add new todos, update the status of existing todos, and remove todos. The app also displays the todo number on each todo card.

## File Structure

```
react-todo-app/
├── src/
│   ├── components/
│   │   ├── Todo.js
│   │   └── TodoForm.js
│   ├── App.js
│   ├── index.js
│   └── app.css
├── public/
│   └── index.html
├── package.json
└── README.md
```
## Usage

- On the Home Page, you will see a list of existing todos with their titles and statuses.
- To add a new todo, type the task in the input field and click the "Submit" button. The new todo will be displayed on the UI.
- To update the status of a todo, click on the todo card, and it will toggle between pending and completed status.
- To remove a todo, click on the "Remove" button in the todo card footer. The todo will be removed from the UI.
- The todo number is displayed before the todo title, showing the order of todos.

## Development

The React Todo App is built using React, a JavaScript library for building user interfaces. The state management in the app allows users to add, update, and remove todos dynamically without requiring a page refresh.

