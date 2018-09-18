<template>
    <div class="cff">
        <textarea
            id="cfftext"
            v-model="cff"
            readonly
            tabindex="-1"
        />
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
        background-color: #fff;
        box-sizing: border-box;
        flex-basis: 0.0;
        flex-grow: 1.0;
        height: 75vh;
        margin-left: 1%;
        margin-right: 1%;
    }

    .cff textarea {
        border-width: 0px;
        height: 100%;
        overflow-y: auto;
        resize: none;
        white-space: pre;
        width: 100%;
        box-sizing: border-box;
    }

</style>
