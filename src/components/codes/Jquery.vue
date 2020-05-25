<template>
    <pre v-highlightjs>
       <code class="javascript">$.ajax({
    type: "POST",
    url: "{{requestUrl}}",
    data: JSON.stringify({
        "name": "Jane"
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        console.log("done.");
    }
});</code>
    </pre>
</template>

<script>
    export default {
        name: 'Jquery',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>