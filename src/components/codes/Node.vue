<template>
    <pre v-highlightjs>
       <code class="node">var request = require('request');
var url ='{{requestUrl}}'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});</code>
    </pre>
</template>

<script>
    export default {
        name: 'Node',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>