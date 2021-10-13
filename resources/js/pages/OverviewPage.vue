<template>
    <div class="container">
        <div class="content" v-for="todo in todoList" :key="todo.id">
            <todo-item :todo="todo"></todo-item>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem';

    export default {
        name: 'overview-page',
        components:{
            'todo-item': TodoItem,
        },
        data() {
            return {
                todoList: [],
            }
        },
        methods: {
            showData() {
                console.log(this.todoList);
            }
        },
        created() {
            axios.get('/api/todo-list')
                .then(({data}) => {
                    this.todoList = data;
                });
        }
    }
</script>

