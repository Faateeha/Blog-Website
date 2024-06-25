<script setup>
import PostList from '../components/PostList.vue'
import { onMounted, ref } from 'vue'

const posts = ref([])
const error = ref(null)

const loadPosts = async () => {
    try {
        const res = await fetch('http://localhost:3000/posts')
        if(!res.ok){
            throw Error('No data available')
        } else {
            posts.value = await res.json()
            console.log(posts.value)
        
     }
    } catch(err){
        error.value = err.message
    }
}



onMounted(() => {
    loadPosts()
})
</script>

<template>
    <h1>The Blog</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostList :posts="posts"  />
    </div>
    <div v-else>Loading</div>
</template>