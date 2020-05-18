<template>
    <section class="jumbotron text-center">
         <p style="font-size: 5em;color: red;"><img src="/images/404.png" /></p>
         <p style="font-size: 1.8em;">Nice try but... <a href="/">GO HOME</a></p>
    </section>
</template>

<script>

    export default {
        name: 'NotFound',
        data: function () {
            return {
                error: false
            }
        },
        methods: {
            
        }
    }
</script>
