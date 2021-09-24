<template>

<div>
    

  <p><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
<path xmlns="http://www.w3.org/2000/svg" d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398Z" fill="#0D0D0D"></path>
</svg></p>

  <button class="btn btn-primary" type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

<input type="text" v-model="search"/>
<div><strong>seach term: {{search}}</strong></div>
<div v-for="name in matchingNames" :key="name">{{ name }}</div>
</div>
<h1>{{hello}}</h1>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'
export default {
    setup() {


        const state = reactive({ count: 0 })

        watch(state, () => {
            console.log(state.count)
        })

        const search = ref('')
        // List of Friends TV show characters
        const names = ref(['monica', 'rachel', 'joey', 'phoebe', 'chandler', 'janice', 'gunther', 'emily'])
        console.log('names', names.value)
        // Computed
        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        const hello = computed(() => {
            return 'hello'
        })

        watch(search, () => {
            console.log(search.value)
            console.log(matchingNames)
        })




        return {
            state,
            matchingNames,
            search,
            names,
            hello
        }
    }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
