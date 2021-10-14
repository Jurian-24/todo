<template>
    <div class="card">
        <header>
            <slot name="header"></slot>
        </header>
    <section>
        <slot name="body"></slot>
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