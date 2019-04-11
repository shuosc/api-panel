<template>
    <div class="apis">
        <APICard :item="item"
                 :key="item.name"
                 v-for="item in items"></APICard>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import APICard from "@/components/APICard.vue";
    // @ts-ignore
    import APIData from "@/assets/apis.json";

    @Component({
        components: {APICard},
    })
    export default class APIs extends Vue {
        private items = APIData;
    }
</script>
