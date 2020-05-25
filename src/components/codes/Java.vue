<template>
    <pre v-highlightjs>
       <code class="java">HttpClient client = new HttpClient();

    GetMethod method = new GetMethod("{{requestUrl}}");

    try {
      int statusCode = client.executeMethod(method);
      byte[] responseBody = method.getResponseBody();
      System.out.println(new String(responseBody));
    } catch (Exception e) {
      System.err.println("Fatal error: " + e.getMessage());
      e.printStackTrace();
    } finally {
      method.releaseConnection();
    }</code>
    </pre>
</template>

<script>
    export default {
        name: 'Java',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>