<template>
    <pre v-highlightjs>
       <code class="javascript">var xhr = new XMLHttpRequest();

xhr.open("POST", "{{requestUrl}}", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("done.");
    }
};

var data = JSON.stringify({
    "name": "Jane"
});

xhr.send(data);</code>
    </pre>
</template>

<script>
    export default {
        name: 'VanillaJs',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>