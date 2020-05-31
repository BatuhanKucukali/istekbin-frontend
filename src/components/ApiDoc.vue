<template>
    <main role="main" class="container request-main page">
        <div class="row">
            <div class="col-md-12">
                <h1>Api Doc</h1>
                <hr>

                <h3>Create Bin</h3>

                <pre v-highlightjs>
                    <code class="bash">
                        curl --request POST 'https://api.istekbin.com/bins' -si | grep 'Location:'
                    </code>
                </pre>

                <h3>List Requests</h3>

                <pre v-highlightjs>
                    <code class="bash">
                        curl 'https://api.istekbin.com/l/{uuid}'
                    </code>
                </pre>

            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'ApiDoc'
    }
</script>
