<template>
    <div>
        <div class="container request-main">
            <div class="row justify-content-md-center">
                <div class="d-flex justify-content-center">
                    <h5>Your Bin Endpoint:</h5>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-md-7 col-sm-12">
                    <input disabled type="text" class="form-control" v-model="requestUrl">
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-primary col-md-12" @click="copy"><i class="fa fa-clipboard"
                                                                                             aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="container request-main">
            <div class="row justify-content-md-center">
                <p class="info-text"><i class="fa fa-exclamation" aria-hidden="true"></i>
                    No requests received yet.</p>
                <p class="info-text"><i class="fa fa-arrow-down" aria-hidden="true"></i>
                    Try one of these and refresh to see the results:</p>
            </div>

            <request-example :requestUrl=requestUrl></request-example>

        </div>

        <div class="container request-main">
            <div class="row justify-content-md-center">
                <p class="info-text"><i class="fa fa-terminal" aria-hidden="true"></i>
                    You can use command-line.</p>
                <pre v-highlightjs><code class="bash">curl {{requestsListUrl}} | jq</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
    import RequestExample from "./RequestExample";

    export default {
        name: 'RequestInfo',
        components: {RequestExample},
        data: function () {
            return {
                requestUrl: process.env.VUE_APP_API_BASE_URL + "/r/" + this.$route.params.uuid,
                requestsListUrl: process.env.VUE_APP_API_BASE_URL + "/l/" + this.$route.params.uuid,
                activeTabName: 'curl'
            }
        },
        methods: {
            copy: function () {
                let toast = this.$toasted.show({});

                this.$copyText(this.requestUrl).then(function () {
                    toast.text("Copied").goAway(3000)
                }, function (e) {
                    toast.text("Can not copy!!!").goAway(3000)
                    console.log(e)
                })
            }
        }
    }
</script>
