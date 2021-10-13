<template>
    <div class="todo-item">
        <todo-card>

            <template #header>
                <h1>{{ group.title }}</h1>
            </template>

             <template #body>
                <p>{{ group.info }}</p>
            </template>

             <template #footer>
                <p>{{ group.done }}</p>
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
