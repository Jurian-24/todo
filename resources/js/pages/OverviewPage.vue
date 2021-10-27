<template>
    <div class="container">
        <form @submit.prevent="addTodo()">
            <label for="title">Titel:</label>
            <input type="text" v-model="form.title">

            <label for="title">Beschrijving (maximaal 255 karakters):</label>
            <textarea v-model="form.info" maxlength="255"></textarea>

            <input type="submit">
        </form>

        <div style="display: flex;">
            <div class="content" style="flex: 1;">
                Afgerond
                <todo-item 
                    v-for="todo in doneList" 
                    :key="todo.id" 
                    :todo="todo" 
                    @deleted="setTodoList($event)" 
                    @completed="setTodoList($event)"
                ></todo-item>
            </div>

            <div class="content" style="flex: 1;">
                Openstaand
                <todo-item 
                    v-for="todo in openList" 
                    :key="todo.id" 
                    :todo="todo" 
                    @deleted="setTodoList($event)" 
                    @completed="setTodoList($event)"
                ></todo-item>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import TodoItem from '../components/TodoItem';

    export default {
        name: 'overview-page',
        components:{
            'todo-item': TodoItem,
        },
        data() {
            return {
                todoList: [],
                form: {
                    title: '',
                    info: '',
                },
            }
        },
        methods: {
            fetchTodoList() {
                axios.get('/api/todo-list')
                .then(({data}) => {
                    this.setTodoList(data);
                });
            },
            addTodo() {
                axios.post('/api/todo-add', {
                    ...this.form
                }).then(({data}) => {
                    this.setTodoList(data);
                });
            },
            setTodoList(todos) {
                this.todoList = todos
            }
            
        },
        computed: {
            openList() {
                return this.todoList.filter(todo => !todo.done);
            },
            doneList() {
                return this.todoList.filter(todo => todo.done);
            },
        },
        created() {
            this.fetchTodoList();
        }
    }
</script>

