<template>
    <div id="app">
        <div class="container" >
            <Form />
            <!-- <CffText /> -->
        </div>
    </div>
</template>

<script>
import CffText from './CffText.vue';
import Form from './Form.vue';
export default {
    components: {
        CffText,
        Form
    },
    name: 'App'
};
</script>


<style>
    body {
        background-color: #5f6d64;
    }
    .container {
        background-color: none;
        display: flex;
        margin-top: 2vh;
        min-width: 300px;
    }
</style>
