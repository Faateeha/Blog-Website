<script setup>

import { defineProps } from 'vue';

const props = defineProps(['posts'], 'error'); 


import SinglePost from '../components/SinglePost.vue'
</script>

<template>
        <ul>
        <li>
            <div v-if="error">{{ error }}</div>
            <div v-if="posts">
                <div v-for="post in posts" :key="post.title">
                    <SinglePost :post="post" />
                    
                </div>
            </div>
            <div v-else>Loading</div>
            
        </li>
    </ul>
</template>