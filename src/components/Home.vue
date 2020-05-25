<template>
    <section class="jumbotron text-center">
        <div class="container">
            <h1>Inspect HTTP Requests</h1>
            <p class="lead text-muted">Istekbin is a free service that allows you to collect http request.</p>
            <p>
                <a href="#" v-on:click.prevent.once="create()" class="btn btn-success my-2"><i class="fa fa-plus"
                                                                                               aria-hidden="true"></i>
                    Create a
                    Istekbin</a>
            </p>

            <alert v-if="error"></alert>

        </div>
    </section>
</template>

<script>
    import Alert from "./Alert";

    export default {
        name: 'Home',
        components: {Alert},
        data: function () {
            return {
                error: false
            }
        },
        methods: {
            create() {
                let router = this.$router;

                fetch(`${process.env.VUE_APP_API_BASE_URL}/c/`, {method: 'post'})
                    .then(function (response) {
                        if (!response.ok) {
                            return Promise.reject(response);
                        }
                        router.push('r/' + response.headers.get("Location"))
                    })
                    .catch(error => {
                        this.error = true
                        console.log(error)
                    });
            }
        }
    }
</script>
