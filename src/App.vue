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
    html {
        position: relative;
        min-height: 100%;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
    }

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
        width: 100%;
        text-align: center;
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
        min-height: 52px;
    }

    .highlight pre {
        margin-bottom: 0;
        word-break: normal;
    }

    pre {
        word-wrap: normal;
    }

    .footer p {
        font-family: "Helvetica Neue" !important;
    }

    .page p {
        font-family: "Helvetica Neue" !important;
    }

    .faq-item {
        margin-top: 10px;
    }

</style>