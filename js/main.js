"use strict"
const app = Vue.createApp({
    data() {
        return {
            apiUrl: 'server.php',
        }
    },
    mounted() {
        axios.get(this.apiUrl).then((response) => {
            console.log(response.data)
        })
    },
}).mount('#app')