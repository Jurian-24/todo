<template>
    <div class="card">
        <header>
            <slot name="header">
        </header>
    <section>
        <slot name="body">
    </section>     
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
</template>

<script>

    export default {
        name: 'card',
    }
</script>