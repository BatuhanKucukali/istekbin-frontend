<template>
    <pre v-highlightjs>
       <code class="go">jsonStr := []byte(`{"name": "Jane"}`)

req, err := http.NewRequest("POST", "{{requestUrl}}", bytes.NewBuffer(jsonStr))
req.Header.Set("Content-Type", "application/json")

client := &http.Client{}

resp, err := client.Do(req)

if err != nil {
    panic(err)
}

defer resp.Body.Close()</code>
    </pre>
</template>

<script>
    export default {
        name: 'Go',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>