<template>
    <pre v-highlightjs>
      <code class="php">$handle = curl_init('{{requestUrl}}');

$data = [
    'name' => 'Jane'
];

$encodedData = json_encode($data);

curl_setopt($handle, CURLOPT_POST, 1);
curl_setopt($handle, CURLOPT_POSTFIELDS, $encodedData);
curl_setopt($handle, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$result = curl_exec($handle);</code>
    </pre>
</template>

<script>
    export default {
        name: 'Php',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>