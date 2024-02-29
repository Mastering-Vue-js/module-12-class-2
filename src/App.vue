<script setup>
import { ref } from "vue";
import { useTodos } from "./todos.js";
import { storeToRefs } from "pinia";

const todosStore = useTodos();
const { filter, filteredTodos } = storeToRefs(todosStore);

const newTodoText = ref("");

const addNewTodo = () => {
  console.log("click", newTodoText.value);
  if (!newTodoText.value) {
    return;
  }
  todosStore.addTodo(newTodoText.value);
  newTodoText.value = "";
};
</script>

<template>
  <div class="inline items-center mr-4 mb-4">
    <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <input
        type="radio"
        value="all"
        v-model="filter"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      All
    </label>
  </div>
  <div class="inline items-center mr-4 mb-4">
    <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <input
        type="radio"
        value="finished"
        v-model="filter"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      Finished
    </label>
  </div>
  <div class="inline items-center mb-4">
    <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <input
        type="radio"
        value="unfinished"
        v-model="filter"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      Unfinished
    </label>
  </div>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <div class="flex items-start mb-5">
        <label
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            v-model="todo.isFinished"
            type="checkbox"
            class="w-4 h-4 mr-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          />
          {{ todo.text }}
        </label>
      </div>
    </li>
  </ul>
  <div
    data-element="fields"
    data-stacked="false"
    class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
  >
    <div class="relative w-full mr-3 formkit-field">
      <label
        class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >New Todo</label
      >
      <input
        v-model="newTodoText"
        class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
      />
    </div>
    <button @click="addNewTodo" data-element="submit" class="formkit-submit">
      <span
        class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Add</span
      >
    </button>
  </div>
</template>

<style scoped>
</style>
