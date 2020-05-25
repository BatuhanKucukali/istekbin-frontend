<template>
    <pre v-highlightjs>
       <code class="csharp">var httpWebRequest = (HttpWebRequest)WebRequest.Create("{{requestUrl}});

httpWebRequest.ContentType = "application/json";
httpWebRequest.Method = "POST";

using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
{
    string json = "{\"name\":\"Jane\"}";

    streamWriter.Write(json);
    streamWriter.Flush();
    streamWriter.Close();
}

var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();

using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
{
    var result = streamReader.ReadToEnd();
}</code>
    </pre>
</template>

<script>
    export default {
        name: 'Net',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>