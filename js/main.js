"use strict"
const app = Vue.createApp({
    data() {
        return {
            tasks_todolist: null,
            apiUrl: 'server.php',
        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            this.tasks_todolist = response.data
        })
    },
}).mount('#app')