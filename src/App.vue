<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>


<style>
    .jumbotron {
        padding-top: 3rem;
        padding-bottom: 3rem;
        margin-bottom: 0;
        background-color: #fff;
    }

    @media (min-width: 768px) {
        .jumbotron {
            padding-top: 6rem;
            padding-bottom: 6rem;
        }
    }

    .jumbotron p:last-child {
        margin-bottom: 0;
    }

    .jumbotron h1 {
        font-weight: 300;
    }

    .jumbotron .container {
        max-width: 40rem;
    }

    .info-text {
        font-family: "Helvetica Neue";
    }

    .request-main {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .request-block {
        margin-top: 20px;
    }

    /* Highlight */
    .highlight pre {
        padding: 16px;
        overflow: auto;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
    }

    .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }

    pre {
        word-wrap: normal;
    }

</style>