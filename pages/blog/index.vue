import { default } from '../../.nuxt/components/nuxt-loading.vue';
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3" v-for="(item,index) in articulos" :key="index">
                <div class="card-body">               
                        <nuxt-link :to="`blog/${item.id}`">
                        <h1>{{item.title}}</h1>
                        </nuxt-link> 
                        <p>
                        {{item.body}}
                        </p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data(){
        return{
            articulos:[
                
            ]
        }
    },
    async created(){

        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
            this.articulos = res.data;

        }   catch (error){
               
             console.log(error);
        }
    }
}
</script>