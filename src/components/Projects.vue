<template>
    <div class="box container-fluid" v-important>
        <h1 class="display-1">So what have I made?</h1>

        <ApolloQuery :query="require('../query/Github.graphql')"
                     v-slot="{ result: {loading, error, data} }">
            <div v-if="loading">
                Loading...
            </div>
            <h1 v-else-if="error">
                Error, please check the console
                {{error}}
            </h1>

            <b-card-group deck style="justify-content: center" v-if="data">
                <b-card :key="repo.name"
                        :title="repo.name"
                        :url="repo.url"
                        style="min-width: 20%; max-width: 30%; margin-top: 2rem;"
                        v-card-hover
                        v-for="repo in data.user.pinnedItems.nodes">
                    <b-card-text>
                        {{repo.description}}
                    </b-card-text>
                    <template v-slot:footer>
                        <div class="row">
                            <div class="col">
                                {{repo.forkCount}}
                                <svg height="5mm" viewBox="0 0 10 16" width="5mm"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <title>Forks</title>
                                    <path
                                            d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                            fill-rule="evenodd"
                                            style="fill:#586069"></path>
                                </svg>
                            </div>
                            <div class="col">
                                <a :style="{'color': repo.primaryLanguage.color}">
                                    {{repo.primaryLanguage.name}}</a>
                            </div>
                            <div class="col">
                                {{repo.stargazers.totalCount}}
                                <svg height="5mm" viewBox="0 0 14 16" width="5mm"
                                     xmlns="http://www.w3.org/2000/svg">

                                    <title>Stars</title>
                                    <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                                          fill-rule="evenodd"
                                          style="fill:#586069"></path>
                                </svg>
                            </div>
                        </div>
                    </template>
                </b-card>
            </b-card-group>
        </ApolloQuery>
    </div>
</template>

<script>
    import {Vue} from "vue-property-decorator";

    export default {
        name: "Projects"
    }

    Vue.directive('card-hover', {
        bind: function (el) {
            el.onmouseover = function () {
                el.classList.add("shadow-lg")
            };

            el.onmouseleave = function () {
                el.classList.remove("shadow-lg")
            };
            el.onclick = function () {
                window.open(el.attributes["url"].value, '_blank');
                window.focus();
            }
        }
    });
</script>

<style scoped>
    div .card {
        cursor: pointer;
        transition: background-color .3s cubic-bezier(.4, 0, .2, 1), box-shadow .4s cubic-bezier(.25, .8, .25, 1);
        text-transform: capitalize;
        /**
        thanks sx <3
         */
    }

</style>
