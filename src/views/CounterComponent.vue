<template >
    <div>
        <h1>Counter <span class="counter"> {{ $store.state.counter }}</span></h1>
        <div>
            <button @click="$store.commit('increment')" >Increase + </button>
            <button @click="$store.commit('decrement')">Decrease -</button>

            <button @click="$store.dispatch('dispatchAction')">Dispatch Actions</button>
            <button @click="$store.dispatch('fetchUser')">Fetch User</button>
        </div>

        <ul>
            <li v-for="(index , user) in $store.state.users" :key="index">{{ user }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "CounterComponent" ,
        data () {
            return {
                counter : 0 ,
            }
        },
    }
</script>


<style></style>
