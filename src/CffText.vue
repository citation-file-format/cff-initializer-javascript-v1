<template>
    <div class="cff">
        <textarea >{{ cff }}</textarea>
    </div>
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
    .cff {
        flex-basis: 0.0;
        flex-grow: 1.0;
        height: 80vh;
        margin-left: 1%;
        margin-right: 1%;
    }

    textarea {
        border-width: 0px;
        height: 100%;
        overflow-y: auto;
        padding: 0px;
        readonly: true;
        resize: none;
        width: 100%;
    }

</style>
