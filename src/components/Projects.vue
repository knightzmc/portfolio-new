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

            <b-card-group deck v-if="data" style="justify-content: center">
                <b-card :title="repo.name"
                        :url="repo.url"
                        style="min-width: 20%; max-width: 30%; margin-top: 2rem;"
                        v-card-hover
                        v-for="repo in data.user.pinnedItems.nodes"
                        :key="repo.name">
                    <b-card-text>
                        {{repo.description}}
                    </b-card-text>
                    <template v-slot:footer>
                        <div class="row">
                            <div class="col">
                                {{repo.forkCount}}
                                <font-awesome-icon icon="code-branch"/>
                            </div>
                            <div class="col">
                                <a :style="{'color': repo.primaryLanguage.color}">
                                    {{repo.primaryLanguage.name}}</a>
                            </div>
                            <div class="col">
                                {{repo.stargazers.totalCount}}
                                <font-awesome-icon icon="star"/>
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
