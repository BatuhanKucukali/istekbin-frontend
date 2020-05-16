<template>
    <section class="jumbotron text-center">
        <div class="container">
            <h1>Inspect HTTP Requests</h1>
            <p class="lead text-muted">BinRequest is a free service that allows you to collect http request.</p>
            <p>
                <a href="#" class="btn btn-success my-2"><i class="fa fa-plus" aria-hidden="true"></i> Create a
                    BinRequest</a>
            </p>
            <router-link to="/request">Link</router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>
