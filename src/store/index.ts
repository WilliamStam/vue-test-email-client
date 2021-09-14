import {createStore, Commit} from 'vuex'

export interface MessageInterface {
    id: string,
    from: string,
    to: string,
    subject: string,
    body: string,
    datetime: string,
}

export interface StoreState {
    messages: {
        inbox: Array<MessageInterface>
        sent: Array<MessageInterface>
        deleted: Array<MessageInterface>
    },
    selected: (MessageInterface | null)
}

export enum FolderNames {
    Inbox = "inbox",
    Sent = "sent",
    Deleted = "deleted",
}


export default createStore({
    state: {
        messages: {
            inbox: [
                {
                    "id": "1",
                    "from": "from@email.com",
                    "to": "me@domain.com",
                    "subject": "Test the email stuff",
                    "body": "<p>the full body</p>",
                    "datetime": "2021-09-13 12:20"
                },
                {
                    "id": "2",
                    "from": "from2@email.com",
                    "to": "me@domain.com",
                    "subject": "Test the email stuff 2",
                    "body": "<p>the full body 2</p>",
                    "datetime": "2021-09-13 12:23"
                }
            ],
            sent: [

                {
                    "id": "3",
                    "from": "testing@email.com",
                    "to": "me@domain.com",
                    "subject": "testing the 'sent' list",
                    "body": "<p>the full <strong>body</strong> 3</p>",
                    "datetime": "2021-09-13 12:33"
                }
            ],
            deleted: []
        },
        selected: null
    },
    mutations: {
        selectMessage(state: StoreState, item: MessageInterface): void {
            state.selected = item;
        },
        add(state: StoreState, item: MessageInterface): void {
            state.messages.sent.push(item);
        },

        delete(state: StoreState, message_id: string): void {

            console.log(message_id)
            // state.messages.deleted.push(item);
        }

    },
    actions: {
        selectMessage({commit}: { commit: Commit}, item:MessageInterface): void {
            commit("selectMessage", item)
        }
    },
    modules: {},
    getters: {
        getByFolder: (state: StoreState) => (folder: FolderNames): Array<MessageInterface> => {
            return state.messages[folder];
        }

    }
})
