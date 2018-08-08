<template>
    <textarea class="cff">{{ cff }}</textarea>
</template>

<script>
export default {
    name: 'CffText',
    props: {
        cff: String
    }
};
</script>


<style>
    textarea.cff {
        margin-left: 1%;
        margin-right: 1%;
        background-color: none;
        flex-grow: 1.0;
        flex-basis: 0.0;
        overflow-y: auto;
        height: 80vh;
        readonly: true;
        resize: none;
    }
</style>
