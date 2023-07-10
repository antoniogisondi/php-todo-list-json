"use strict"
const app = Vue.createApp({
    data() {
        return {
            item: '',
            tasks_todolist: [],
            apiUrl: 'server.php',
        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.tasks_todolist = response.data
        })
    },
    methods: {
        addTask() {
            if (this.item != '') {
                const obj = {
                    text: this.item,
                    done: false
                }

                axios.post(this.apiUrl, { obj }, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
                    this.item = ''
                    this.tasks_todolist = response.data
                    console.log(this.tasks_todolist)

                })
            }

        },
        taskDone(index) {
            this.tasks_todolist[index].done = !this.tasks_todolist[index].done
        },
        taskDelete(index) {
            const data = new FormData();
            data.append('deleteTask', index)

            axios.post(this.apiUrl, data).then((response) => {
                this.tasks_todolist = response.data
                console.log(this.tasks_todolist)

            })
        }
    },
}).mount('#app')