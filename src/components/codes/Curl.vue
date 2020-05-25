<template>
    <pre v-highlightjs>
       <code class="bash">curl -X POST -H "Content-Type: application/json" -d '{"name": "Jane"}' {{requestUrl}}</code>
    </pre>
</template>

<script>
    export default {
        name: 'Curl',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>