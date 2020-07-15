<template>
    <div>
        <h1>Detalle de los articulos id:{{$route.params.id}}</h1>
        <div class="col-md-3 card-body">
                <h1>{{articulo.title}}</h1>

                <p class="small">{{articulo.nombreAutor}}</p>

                <p>{{articulo.body}}</p>

                <nuxt-link to="/blog" class="btn btn-primary btn-block">Atras</nuxt-link>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    data(){
        return {
            //articulo:''
        }
    },

    async created(){

    //       try{
    //         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
    //         //console.log(res.data);
    //         this.articulo = res.data;
    //       }catch(error){
    //           console.log(error);
    //       }  
    },

    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}){
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const articulo = res.data;
            //console.log('articulo', articulo);

            const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
            //console.log('autor:' , resAutor.data);

            articulo.nombreAutor = resAutor.data.name;
            return {articulo};

        }catch(error){
            console.log(error);
            return {error: error}
        }
    }
}
</script>