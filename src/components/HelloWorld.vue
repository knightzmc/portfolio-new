<template>
    <div v-important id="hello" class="text-center box">
        <h1>{{ msg }}</h1>
        <h2>I'm a Professional Java and Kotlin developer who specialises in Spigot Plugins</h2>

        <div class="bottom">
            <a href="#about" v-smooth-scroll> <h3>Find out about me</h3></a>
            <font-awesome-icon icon="angle-down"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue{
        @Prop() private msg!: string;
    }
</script>

<style scoped>
    .bottom {
        padding-top: 13rem;
    }

    h1 {
        font-size: 100px;
    }
</style>
