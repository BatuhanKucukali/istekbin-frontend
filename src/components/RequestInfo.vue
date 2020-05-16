<template>
    <div>
        <div class="container request-main">
            <div class="row justify-content-md-center">
                <div class="col-6">
                    <label>Bin URL</label>
                    <input type="text" class="form-control">
                </div>
            </div>
        </div>

        <div class="container request-main">
            <div class="row justify-content-md-center">
                <p class="info-text">No requests received yet.</p>
                <p class="info-text">Try one of these and refresh to see the results:</p>
                <ul>
                    <li><code>curl -H 'X-Status: Awesome' https://postb.in/1589632210759-9801183240488</code></li>
                    <li><code>wget https://postb.in/1589632210759-9801183240488?hello=world</code></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestInfo'
    }
</script>
