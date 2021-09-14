<template>
    <div class="inbox">
        <message-list  v-bind:list="list">Inbox</message-list>
        <message-details></message-details>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import MessageList from "@/components/MessageList";
import MessageDetails from "@/components/MessageDetails";
import {FolderNames} from "@/store";

export default defineComponent({
    name: "Inbox",
    components: {
        MessageList,
        MessageDetails
    },
    data: () => ({
        list: [],
    }),
    mounted() {
        // get the list from the store
        this.list = this.$store.getters.getByFolder(FolderNames.Inbox)

        // get the first message and set the selected to the first message, so that the details changes when you flip threough images
        const [first_message] = this.list;
        this.$store.dispatch("selectMessage", first_message);
    },

});
</script>
<style lang="scss">

</style>