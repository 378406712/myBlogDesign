<template>
    <div class="markdown">
        <Markdown/>
    </div>
</template>

<script>
    import Markdown from 'vue-meditor';
    
    export default {
        name: "markdown",
        components: {
            Markdown
        }
    }
</script>