<template>
  <div class="ui basic content center aligned segment">
    <button
      class="ui basic button icon"
      v-on:click="openForm"
      v-show="!isCreating"
    >
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="description" type="text" />
          </div>
          <div class="field">
            <label>Due Date</label>
            <input v-model="dueDate" type="date" />
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="sendForm()">
              Create
            </button>
            <button class="ui basic red button" v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      description: "",
      dueDate: "",
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      // MAKE SURE FORM IS FILLED BEFOR SUBMIT
      if (this.description.length > 0 && this.dueDate.length > 0) {
        let body = {
          user_id: 1,
          project_id: 1,
          dueDate: this.dueDate,
          description: this.description,
          comment: "",
          done: "0",
        };

        //SEND REQUEST
        axios
          .post("http://127.0.0.1:8000/api/tasks/", body, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            this.todos = response.data.Tasks;
            this.$emit("create-todo", response.data.Task);
            this.isCreating = false;
          })
          .catch((error) => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => this.closeForm());
      }
    },
  },
};
</script>
