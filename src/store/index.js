import { createStore } from "vuex";
import axios from 'axios';
const store = createStore({
    state : { // state
        counter : 0 ,
        users : []
    },
    mutations : { // commit 
        increment (state) {
            state.counter ++ ;
        },
        decrement (state) {
            if(state.counter)
            state.counter-- ;
        },
        SET_USER  (state , users) {
            state.users = users ;
        }
    },
    actions :{ // dispatch 
        dispatchAction () {
            console.log('Dispatching The actions usually work with API ( Application Programming InterFace )');
        },
        async fetchUser () {
            try {
                const getUser = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.commit('SET_USER',getUser.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
});


export default store ;