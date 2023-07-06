"use strict"
const app = Vue.createApp({
    data() {
        return {
            item: '',
            done: '',
            tasks_todolist: null,
            apiUrl: 'server.php',
        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.tasks_todolist = response.data
        })
        this.addTask()
    },
    methods: {
        addTask() {
            const data = {
                text: this.item,
                done: this.done
            }

            axios.post(this.apiUrl, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
                this.item = ''
                this.done = ''
                this.tasks_todolist = response.data
                console.log(this.tasks_todolist)

            })
        }
    },
}).mount('#app')