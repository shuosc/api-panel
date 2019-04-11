<template>
    <v-card :class="{'light-green':alive===true,red:alive===false}" class="mb-2">
        <v-card-title class="justify-center" primary-title>
            <h2>{{item.name}}</h2>
        </v-card-title>
        <v-card-text>
            <v-layout column>
                <v-flex xs12>
                    url: <a :href="item.url">{{item.url}}</a>
                </v-flex>
                <v-flex xs12>
                    详细信息: <a :href="item.repository_url">{{item.repository_url}}</a>
                </v-flex>
            </v-layout>
            <v-divider v-if="item.info"></v-divider>
            <p v-if="item.info">{{item.info}}</p>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {API} from "@/types/API";
    import Axios from "axios";

    const validResponseCode = [200, 201, 202, 401, 403];
    @Component
    export default class APICard extends Vue {
        @Prop() private item!: API;
        private alive: boolean | null = null;

        async mounted() {
            try {
                const response = await Axios.get(this.item.url);
                this.alive = validResponseCode.indexOf(response.status) !== -1;
            } catch (e) {
                this.alive = (e.toString() as string).indexOf("403") !== -1;
            }
        }
    }
</script>

<style lang="stylus" scoped>
</style>
