<template>
    <div class="sent">
        <message-list v-bind:list="list">Sent</message-list>
        <message-details></message-details>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import MessageList from "@/components/MessageList";
import MessageDetails from "@/components/MessageDetails";
import {FolderNames} from "@/store";

export default defineComponent({
    name: "Sent",
    components: {
        MessageList,
        MessageDetails
    },
    data: () => ({
        list: [],
    }),
    mounted() {
        this.list = this.$store.getters.getByFolder(FolderNames.Sent)
        const [first_message] = this.list;
        this.$store.dispatch("selectMessage", first_message);
    },
});
</script>
