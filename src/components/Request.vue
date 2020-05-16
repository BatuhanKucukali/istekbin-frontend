<template>
    <div class="container request-main">
        <h2>Requests</h2>

        <template v-for="request in requests">
            <request-item :request=request :key="request.created_at"></request-item>
        </template>


    </div>
</template>

<script>
    import RequestItem from "./RequestItem";

    export default {
        name: 'Request',
        components: {RequestItem},
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
