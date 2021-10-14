<template>
    <div class="todo-item">
        <todo-card>

            <template #header>
                <h1>{{ todo.title }}</h1>
            </template>

             <template #body>
                <p>{{ todo.info }}</p>
            </template>

             <template #footer>
                <p>{{ todo.done }}</p>
            </template>

        </todo-card>
    </div>
</template>

<script>
import Card from '../components/Card';

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
        }

    }
</script>
