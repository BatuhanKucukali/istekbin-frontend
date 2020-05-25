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
                <p class="info-text">No requests received yet.</p>
                <p class="info-text">Try one of these and refresh to see the results:</p>
                <p><code>curl -H 'X-Status: Awesome' {{requestUrl}}</code></p>
                <p><code>wget {{requestUrl}}?hello=world</code></p>
            </div>
        </div>

        <div class="container request-main">
            <div class="row justify-content-md-center">
                <p class="info-text">You can use command-line.</p>
                <p><code>curl {{requestsListUrl}} | jq</code></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestInfo',
        data: function () {
            return {
                requestUrl: process.env.VUE_APP_API_BASE_URL + "/r/" + this.$route.params.uuid,
                requestsListUrl: process.env.VUE_APP_API_BASE_URL + "/l/" + this.$route.params.uuid
            }
        },
        methods: {
            copy: function () {
                this.$copyText(this.requestUrl).then(function (e) {
                    alert('Copied')
                    console.log(e)
                }, function (e) {
                    alert('Can not copy')
                    console.log(e)
                })
            }
        }
    }
</script>
