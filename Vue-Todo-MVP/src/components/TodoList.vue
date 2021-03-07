<template>
  <div>
    <p class="tasks">Completed Tasks: {{todos.filter(todo => {return todo.done === 1}).length}}</p>
    <p class="tasks">Pending Tasks: {{todos.filter(todo => {return todo.done === 0}).length}}</p>
    <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-on:edit-todo="editTodo" v-for="todo in todos" :todo.sync="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert';
import Todo from './Todo';

import axios from 'axios';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    editTodo(todo){
      const todoIndex = this.todos.indexOf(todo);

        let body = {
          description: todo.description,
          dueDate: todo.dueDate,  
        }

      axios
      .patch('http://127.0.0.1:8000/api/tasks/'+todo.id, body, {
            headers: {
            "Content-Type": "application/json",
            }
       })
      .then(response => {
        this.todos[todoIndex] = body;
        sweetalert('Success!', 'To-Do Edited!', 'success');
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

    },
    deleteTodo(todo) {
      sweetalert({
        title: 'Are you sure?',
        text: 'This To-Do will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false,
      },
      () => {
        const todoIndex = this.todos.indexOf(todo);
        
        // SEND REQUEST FOR DELETE
        axios
          .delete('http://127.0.0.1:8000/api/tasks/'+todo.id, {
                headers: {
                "Content-Type": "application/json",
                }
          })
          .then(response => {

            this.todos.splice(todoIndex, 1);

            // SHOW SUCCESS MESSAGE
            sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)

        
      });

      
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);

        let body = {
            user_id: 1,
            project_id: 1,
            dueDate: todo.dueDate,
            description: todo.description,
            comment: "",
            done:"1",
        }

      axios
      .put('http://127.0.0.1:8000/api/tasks/'+todo.id, body, {
            headers: {
            "Content-Type": "application/json",
            }
       })
      .then(response => {
        this.todos[todoIndex].done = true;
        sweetalert('Success!', 'To-Do completed!', 'success');
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>

