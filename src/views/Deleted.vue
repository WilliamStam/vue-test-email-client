<template>
    <div class="deleted">
        <message-list  v-bind:list="list">Deleted</message-list>
        <message-details></message-details>

    </div>
</template>

<script>
import {defineComponent} from "vue";
import MessageList from "@/components/MessageList";
import MessageDetails from "@/components/MessageDetails";
import {FolderNames} from "@/store";

export default defineComponent({
    name: "Deleted",
    components: {
        MessageList,
        MessageDetails
    },
    data: () => ({
        list: [],
    }),
    mounted() {
        this.list = this.$store.getters.getByFolder(FolderNames.Deleted)
    },
});
</script>