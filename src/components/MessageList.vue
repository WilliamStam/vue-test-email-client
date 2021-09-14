<template>

    <div id="message-list">
        <h1>
            <slot></slot>
        </h1>
        <div id="message-list-inner">


        <template v-if="list.length">
            <article v-for="message in list" :key="message.id" class="list-item" :class="{active: message.id == currentlySelectedId}" @click="selectMessage(message)">
                <div class="details">
                    <div class="from">
                        {{ message.from }}
                    </div>
                    <div class="subject">
                        {{ message.subject }}
                    </div>
                </div>
                <div class="time">{{ message.datetime }}</div>
            </article>


        </template>
        <div v-else>
            No items found
        </div>
</div>

    </div>
</template>

<script>
import {defineComponent} from "vue";
import MessageInterface from "@/store";


export default defineComponent({
    name: "message-list",
    props: {
        list: Array,
    },
    data: () => ({
        selected: "",
    }),
    mounted() {
        this.selected = null;
        if (this.$store.state.messages.selected) {
            this.selected = this.$store.state.messages.selected.id;
        }
    },
    computed: {
        currentlySelectedId() {
            if (this.$store.state.selected) {
                return this.$store.state.selected.id;
            }
            return null;
        }
    },
    methods: {

        selectMessage(message) {
            this.$store.dispatch("selectMessage", message);
        },
    }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#message-list {
    background: #e1e1e1;

    display: flex;
    flex-direction: column;
max-height:100vh;
    height:100%;

}
#message-list-inner {
    flex-basis: 100%;
    flex-grow: 1;
    overflow: auto;
}


.list-item {
    border-bottom: 1px solid #cccccc;
    display: flex;

    .details {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        text-align: left;

        .from {

        }

        .subject {
            font-size: smaller;
            color: #999999;
        }
    }

    &.active {
        background: red;
    }


    .time {

    }
}
</style>
