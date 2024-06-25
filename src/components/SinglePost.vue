<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(['post']);
const snippet = computed(() => {
    return props.post.body.substring(0, 200) + '...';
})
</script>

<template>
    
    <h1>{{ post.title }}</h1>
    <p>{{ snippet }}</p>
    <p>{{ post.author }}</p>
    <p>{{ post.date }}</p>
    <router-link :to="'/details/' + post.id">Read more</router-link>
</template>
  