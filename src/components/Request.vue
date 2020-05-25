<template>
    <div class="container request-main">
        <template v-if="requests.length === 0">
            <request-info></request-info>
        </template>

        <div v-if="requests.length > 0">

            <h2>Requests</h2>

            <template v-for="request in requests">
                <request-item :request=request :key="request.created_at"></request-item>
            </template>
        </div>

        <div v-if="notFound === true">
            <not-found></not-found>
        </div>
    </div>
</template>

<script>
    import RequestItem from "./RequestItem";
    import RequestInfo from "./RequestInfo";
    import NotFound from "./NotFound";

    export default {
        name: 'Request',
        components: {RequestInfo, RequestItem, NotFound},
        data() {
            return {
                requests: [],
                notFound: false
            }
        },
        created() {
            fetch(`${process.env.VUE_APP_API_BASE_URL}/l/${this.$route.params.uuid}`)
                .then((response) => {
                    this.notFound = !response.ok
                    return response.json();
                })
                .then((requests) => this.requests = requests)
        }
    }
</script>
