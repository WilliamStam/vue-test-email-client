<template>
    <article id="message-details">

        <template v-if="message">
            <header id="details-header">
                <table id="body-header">
                    <tr>
                        <th>
                            From:
                        </th>
                        <td>
                            {{ message.from }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            To:
                        </th>
                        <td>
                            {{ message.to }}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Subject:
                        </th>
                        <td>
                            {{ message.subject }}
                        </td>
                    </tr>
                </table>
            </header>

            <article id="details-body">
                <div v-html="message.body"></div>
            </article>

        </template>
        <div v-else>
            No message selected
        </div>


    </article>
</template>

<script>
import {defineComponent} from "vue";
import MessageInterface from "@/store";

export default defineComponent({
    name: "message-details",


    computed: {
        message() {
            return this.$store.state.selected;
        }

    }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#message-details {
    border: 1px solid #ccc;
    width:100%;
}
#details-header {
    table {
        width:100%;
        th, td {
            padding: 0.3rem;
            border-bottom: 1px solid #e1e1e1;
            text-align: left;
        }
        th {
            text-align: right;
        }
    }
}

</style>
