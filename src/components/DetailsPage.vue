<script setup>
import { ref, onMounted, defineProps } from 'vue';
const props = defineProps(['id']);




const posts = ref(null);
const error = ref(null);



const loadPost = async () => {
    
    try {
        const res = await fetch('http://localhost:3000/posts/' + props.id)
        if(!res.ok){
            throw Error('Post does not exist')
        } else {
            posts.value = await res.json()
            console.log(posts.value)
        
     }
    } catch(err){
        error.value = err.message
    }
}
onMounted(() => {
    loadPost()
})
</script>

<template>
    
    <div v-if="error">{{ error }}</div>
    <div v-if="posts">
        
        <h1>{{ posts.title }}</h1>
        <p>{{ posts.body }}</p>
        <p>{{ posts.author }}</p>
        <p>{{ posts.date }}</p>
    </div>
</template>