<template>
    <pre v-highlightjs>
       <code class="ruby">uri = URI('{{requestUrl}}')

req = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')

req.body = {
    name: 'Jane'
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port) do |http|
    http.request(req)
end</code>
    </pre>
</template>

<script>
    export default {
        name: 'Ruby',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>