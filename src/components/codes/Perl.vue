<template>
    <pre v-highlightjs>
       <code class="perl">my $uri = '{{requestUrl}}';
my $req = HTTP::Request->new('POST', $uri);
my $data = '{"name": "Jane"}';

$req->header('Content-Type' => 'application/json');
$req->content($data);

my $lwp = LWP::UserAgent->new;
$lwp->request($req);</code>
    </pre>
</template>

<script>
    export default {
        name: 'Perl',
        props: {
            requestUrl: {type: String, required: true}
        }
    }
</script>