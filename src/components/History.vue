<template>
    <div v-if="binItems.length > 0" class="container request-main">
        <h4>History</h4>
        <div class="row justify-content-md-center">
            <div class="col-8">
                <ul class="list-group">
                    <li v-for="bin in binItems" :key="bin.key"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        <a :href="'r/'+ bin.key">/r/{{bin.key | summaryKey}}</a>
                        <span class="badge badge-primary badge-pill">{{bin.created_at | moment("from")}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'History',
        data() {
            return {
                binItems: [],
            }
        },
        mounted() {
            fetch(`${process.env.VUE_APP_API_BASE_URL}/cl`)
                .then((response) => {
                    return response.json();
                })
                .then((binItems) => this.binItems = binItems)
        },
        filters: {
            summaryKey: function (value) {
                return value.substring(0, 18) + ".."
            }
        }
    }
</script>