<template>
    <div>
        <div class="container request-main">
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <label>Bin URL</label>
                    <input type="text" class="form-control" v-model="requestUrl">
                </div>
            </div>
        </div>

        <div class="container request-main">
            <div class="row justify-content-md-center">
                <p class="info-text">No requests received yet.</p>
                <p class="info-text">Try one of these and refresh to see the results:</p>
                <ul>
                    <li><code>curl -H 'X-Status: Awesome' {{requestUrl}}</code></li>
                    <li><code>wget {{requestUrl}}?hello=world</code></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestInfo',
        data: function () {
            return {
                requestUrl: process.env.VUE_APP_API_BASE_URL + "/r/" + this.$route.params.uuid
            }
        },
    }
</script>
