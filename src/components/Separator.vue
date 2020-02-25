<template>
    <div>
        <hr :style="{'background-color': color}">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Separator extends Vue {
        @Prop() private color!: string;
    }
</script>

<style scoped>
    hr {
        height: 5px;
        max-width: 100%;
        margin-bottom: 0;
    }
</style>
