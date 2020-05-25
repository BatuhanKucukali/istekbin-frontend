<template>
    <pre v-highlightjs>
       <code class="python">import requests

url = '{{requestUrl}}'

data = {
    "name": "Jane"
}

r = requests.post(url, verify=False, json=data)</code>
    </pre>
</template>

<script>
    export default {
        name: 'Python',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>