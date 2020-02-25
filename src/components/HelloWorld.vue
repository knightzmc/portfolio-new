<template>
    <div class="text-center box" id="hello" v-important>
        <h1>{{ msg }}</h1>
        <h2>I'm a Professional Java and Kotlin developer who specialises in Spigot Plugins</h2>

        <div class="bottom">
            <a href="#about" v-smooth-scroll><h3>Find out about me</h3></a>

            <svg aria-hidden="true" focusable="false"
                 role="img" viewBox="0 0 320 512"
            style="max-width: 1.5%">
                <path class="" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      data-v-469af010=""
                      fill="currentColor"></path>
            </svg>
<!--            <font-awesome-icon icon="angle-down"/>-->
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
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
