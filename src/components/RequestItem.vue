<template>
    <div class="div">
        <div class="request">
            <div class="request-block">
                <div class="row">
                    <div class="col-6"><h4>{{request.method}}</h4></div>
                    <div class="col-6"><h4 class="float-right">{{request.created_at | moment("from")}}</h4></div>
                </div>
            </div>

            <div class="request-block">
                <h5>Url</h5>
                <div class="highlight">
                    <pre><code>{{request.uri}}</code></pre>
                </div>
            </div>

            <div class="request-block">
                <div class="row">
                    <div class="col-4">
                        <h5>Ip</h5>
                        <div class="highlight">
                            <pre><code>{{request.ip}}</code></pre>
                        </div>
                    </div>
                    <div class="col-4">
                        <h5>Content-Type</h5>
                        <div class="highlight">
                            <pre><code>{{request.content_type}}</code></pre>
                        </div>
                    </div>
                    <div class="col-4">
                        <h5>User-Agent</h5>
                        <div class="highlight">
                            <pre><code>{{request.user_agent}}</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="request-block">
                <h5>Headers</h5>
                <div class="highlight">
                    <pre><code>{{request.headers | jsonEmptyFormat}}</code></pre>
                </div>
            </div>

            <div class="request-block">
                <h5>Body</h5>
                <div class="highlight">
                    <pre><code>{{request.body | beautify}}</code></pre>
                </div>
            </div>

            <div class="request-block">
                <h5>Cookies</h5>
                <div class="highlight">
                    <pre><code>{{request.cookies | jsonEmptyFormat}}</code></pre>
                </div>
            </div>
        </div>

        <hr>
    </div>
</template>

<script>
    export default {
        name: 'RequestItem',
        props: {
            request: {type: Object, required: true}
        },
        filters: {
            jsonEmptyFormat: function (value) {
                if (Object.keys(value).length === 0) {
                    return ""
                }
                return value
            },
            beautify: function (text) {
                try {
                    const obj = JSON.parse(text);
                    return JSON.stringify(obj, null, 2)
                } catch {
                    return text;
                }
            }
        }
    }
</script>
