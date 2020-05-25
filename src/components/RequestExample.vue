<template>
    <div class="card">
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
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'vanilla-js' }"
                       @click.prevent="setActiveTab('vanilla-js')">Vanilla JS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'node' }"
                       @click.prevent="setActiveTab('node')">Node</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'jquery' }"
                       @click.prevent="setActiveTab('jquery')">jQuery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'go' }"
                       @click.prevent="setActiveTab('go')">Go</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'ruby' }"
                       @click.prevent="setActiveTab('ruby')">Ruby</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'python' }"
                       @click.prevent="setActiveTab('python')">Python</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'perl' }"
                       @click.prevent="setActiveTab('perl')">Perl</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'java' }"
                       @click.prevent="setActiveTab('java')">Java</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ 'active': activeTabName === 'net' }"
                       @click.prevent="setActiveTab('net')">.NET</a>
                </li>
            </ul>
        </div>
        <div class="card-body" v-show="activeTabName === 'curl'">
            <curl :requestUrl=requestUrl></curl>
        </div>
        <div class="card-body" v-show="activeTabName === 'php'">
            <php :requestUrl=requestUrl></php>
        </div>
        <div class="card-body" v-show="activeTabName === 'vanilla-js'">
            <vanilla-js :requestUrl=requestUrl></vanilla-js>
        </div>
        <div class="card-body" v-show="activeTabName === 'node'">
            <node :requestUrl=requestUrl></node>
        </div>
        <div class="card-body" v-show="activeTabName === 'jquery'">
            <jquery :requestUrl=requestUrl></jquery>
        </div>
        <div class="card-body" v-show="activeTabName === 'go'">
            <go :requestUrl=requestUrl></go>
        </div>
        <div class="card-body" v-show="activeTabName === 'ruby'">
            <ruby-language :requestUrl=requestUrl></ruby-language>
        </div>
        <div class="card-body" v-show="activeTabName === 'python'">
            <python :requestUrl=requestUrl></python>
        </div>
        <div class="card-body" v-show="activeTabName === 'perl'">
            <perl :requestUrl=requestUrl></perl>
        </div>
        <div class="card-body" v-show="activeTabName === 'java'">
            <java :requestUrl=requestUrl></java>
        </div>
        <div class="card-body" v-show="activeTabName === 'net'">
            <net :requestUrl=requestUrl></net>
        </div>
    </div>
</template>

<script>
    import Curl from "./codes/Curl";
    import Php from "./codes/Php";
    import VanillaJs from "./codes/VanillaJs";
    import Node from "./codes/Node";
    import Jquery from "./codes/Jquery";
    import Go from "./codes/Go";
    import RubyLanguage from "./codes/Ruby";
    import Python from "./codes/Python";
    import Perl from "./codes/Perl";
    import Java from "./codes/Java";
    import Net from "./codes/Net";

    export default {
        name: 'RequestExample',
        components: {
            Curl,
            Php,
            VanillaJs,
            Node,
            Jquery,
            RubyLanguage,
            Go,
            Python,
            Perl,
            Java,
            Net,
        },
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
