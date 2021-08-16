<template>
    <p class="help-text">
        {{text}}
        <a class="spec-link" target="docs" v-bind:href="url">(spec)</a>
    </p>
</template>

<script>

export default {
    name: 'HelpText',
    components: {
    },
    props: {
        text: String,
        url: String
    },
    computed: {
    },
    methods: {
    }
};

</script>

<style>
    p.help-text {
        font-style: italic;
        font-size: 0.8rem;
        margin-top: 0;
        margin-bottom: 0.5em;
    }
    a.spec-link {
        font-style: normal;
    }
</style>
