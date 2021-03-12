<template>
  <div id="app">
    <h1 class="ui dividing centered header">Rooah! Todo App</h1>
    <div class='centered'>
      <div class='container'>
        <div class="col-md-12">
          <div class="col-md-4"></div>
          <div class="col-md-4 offset-lg-4 col-sm-12">
            <todo-list v-on:load-todo="loadTodo" v-bind:todos="todos"></todo-list>
            <create-todo v-on:create-todo="createTodo"></create-todo>
          </div>
          <div class="col-md-4"></div>
            
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import sweetalert from 'sweetalert';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

import axios from 'axios';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      this.loadTodos();
      sweetalert('Success!', 'To-Do created!', 'success');

    },
    loadTodos(){
      axios
      .get('http://18.197.166.32:8080/api/tasks')
      .then(response => {
        this.todos = response.data.Tasks
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    },
  },
   mounted () {
    // SEND REQUEST TO API
    this.loadTodos();
  },
};
</script>
