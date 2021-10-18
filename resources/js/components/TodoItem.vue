<template>
    <div class="todo-item" >

        <todo-card for="info" v-bind:style="todo.done ? 'text-decoration: line-through;' : 'text-decoration: none;'">
            <template #header>
                <h1>{{ todo.title }}</h1>
            </template>

             <template #body >
                <label>
                    Voltooid: <input type="checkbox" v-model="todo.done" @change="setCompleted(todo.id)">
                </label>
                <p>{{ todo.info }}</p>
                <button @click="deleteTodo(todo.id)">Verwijder Taak</button>
            </template>
        </todo-card>
    </div>
</template>

<script>
import Card from '../components/Card';
import axios from 'axios';

    export default {
        name: 'todo-item',
        components: {
            'todo-card': Card,  
        },
        props: {
            todo: {
                type: Object,
                default: () => ({}),
            },
        },
        methods: {
            deleteTodo(id) {
                axios.post(`/api/todo-delete/${id}`).then(({data}) => {
                   this.$emit('deleted', data);
                });
            },
            setCompleted(todoId) {
                axios.post(`/api/todo-complete/${todoId}`).then(({data}) => {
                    this.$emit('completed', data);
                });
            }
        },
        computed: {
            isCompleted() {
                return todo.id;
            },
            todoCompleted() {
                if(todo.id == true) {
                    this.completed = true
                    return;
                }
            }
        },
    }
</script>
