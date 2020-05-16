<template>
    <div class="container request-main">
        <h2>Requests</h2>

        <template v-if="requests.length == 0">
            <request-info></request-info>
        </template>

        <div v-if="requests.length > 0">
            <template v-for="request in requests">
                <request-item :request=request :key="request.created_at"></request-item>
            </template>
        </div>


    </div>
</template>

<script>
    import RequestItem from "./RequestItem";
    import RequestInfo from "./RequestInfo";

    export default {
        name: 'Request',
        components: {RequestInfo, RequestItem},
        data() {
            return {
                requests: []
            }
        },
        created() {
            fetch(`http://localhost:3000/l/${this.$route.params.uuid}`)
                .then((res) => {
                    return res.json()
                })
                .then((requests) => this.requests = requests)
        }
    }
</script>
