import { defineStore } from "pinia";

export const useTodos = defineStore('todos', {
    // state
    state: () => ({
        todos: [],
        filter: 'all',
        nextId: 0
    }),
    // getters
    getters: {
        filteredTodos() {
            if (this.filter === 'finished') {
                return this.finishedTodos;
            } else if (this.filter === 'unfinished') {
                return this.unfinishedTodos;
            } else {
                return this.todos;
            }
        },
        finishedTodos() {
            return this.todos.filter(todo => todo.isFinished)
        },
        unfinishedTodos() {
            return this.todos.filter(todo => !todo.isFinished)
        }
    },
    // actions
    actions: {
        addTodo(text) {
            this.todos.push({ text: text, id: this.nextId++, isFinished: false });
        }
    }
});