<template>
    <section class="jumbotron text-center">
        <div class="container">
            <h1>Inspect HTTP Requests</h1>
            <p class="lead text-muted">BinRequest is a free service that allows you to collect http request.</p>
            <p>
                <a href="javascript:void(0)" v-on:click="create()" class="btn btn-success my-2"><i class="fa fa-plus"
                                                                                                   aria-hidden="true"></i>
                    Create a
                    BinRequest</a>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            create() {
                fetch('http://localhost:1323/c/', {method: 'post'})
                    .then(function (response) {
                        window.location = 'r/' + response.headers.get("Location")
                    })
            }
        }
    }
</script>
