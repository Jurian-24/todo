<template>
    <div class="card">  
        <slot name="header"></slot>
    <section>
        <slot name="body"></slot>
    </section>
        <slot name="footer"></slot>
    </div>
</template>

<script>

    export default {
        name: 'card',
    }
</script>