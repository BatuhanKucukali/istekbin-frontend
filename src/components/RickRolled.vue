<style>

    #torturing-section {
        background-color: black;
    }

    iframe {
        pointer-events: none;
    }

    #save-me {
        padding: 2rem 0 2rem 0;
    }

    .no-select {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }

    #fire-text {
        margin: -4rem 0 2rem 0;
        font-size: 5rem;
        color: #f5f5f5;
        font-family: “Open Sans”, sans-serif;
        text-shadow: 0 -2px 4px #fff, 0 -2px 10px #FF3, 0 -10px 20px #F90, 0 -20px 40px #C33;
        animation: fire-text-animation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    @keyframes fire-text-animation {
        0% {
            opacity: 0;
            transform: translate3d(50px, 50px, 0);
        }
        20% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        40% {
            opacity: 0;
            transform: translate3d(-25px, -25px, 0);
        }
        60% {
            opacity: 0;
            transform: translate3d(-50px, -50px, 0);
        }
        80% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        100% {
            opacity: 0;
            transform: translate3d(25px, 25px, 0);
        }
    }
</style>
<template>
    <section id="torturing-section" class="jumbotron text-center">
        <h1 id="fire-text" class="no-select">You got Rick Rolled!</h1>
        <iframe class="no-select"
                width="640"
                height="385"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&loop=1&rel=0&modestbranding=1&playlist=dQw4w9WgXcQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen/>
        <h4 id="save-me"><a href="/">Save me 😭💥🔫</a></h4>
    </section>
</template>

<script>
    export default {
        name: 'RickRolled',
        beforeCreate: function () {
            document.body.className = 'rickrolled';
        }
    }
</script>
