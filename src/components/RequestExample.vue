<template>
    <div class="card text-center">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'curl' }"
                       @click.prevent="setActiveTab('curl')">Curl</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'php' }"
                       @click.prevent="setActiveTab('php')">Php</a>
                </li>
            </ul>
        </div>
        <div class="card-body" v-if="activeTabName === 'curl'">
            <code>curl -H 'X-Status: Awesome' {{requestUrl}}</code>
        </div>
        <div class="card-body" v-if="activeTabName === 'php'">
            <p>php</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestExample',
        data: function () {
            return {
                activeTabName: 'curl'
            }
        },
        props: {
            requestUrl: {type: String, required: true}
        },
        methods: {
            setActiveTab(name) {
                this.activeTabName = name;
            }
        }
    }
</script>
