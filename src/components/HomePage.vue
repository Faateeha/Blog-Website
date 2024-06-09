<script setup>
import { onMounted, ref, computed } from 'vue'

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

const snippet = computed(() => {

        return post.body.slice(0, 100) + '...'
    
})

onMounted(() => {
    loadPosts()
})
</script>

<template>
    <h1>The Blog</h1>
    <ul>
        <li>
            <div v-if="error">{{ error }}</div>
            <div v-else>
                <div v-for="post in posts" :key="post.id">
                    <h2>{{ post.tittle }}</h2>
                    <p>{{ post.body }}</p>
                    <p>{{ post.author }}</p>
                    <p>{{ post.date }}</p>
                    
                </div>
            </div>
            
        </li>
    </ul>
</template>