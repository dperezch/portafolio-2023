<template>
    <div class="contenedorVideo flex flex-center column q-my-xl q-py-xl">
        <IndexSkeleton v-if="skeleton" />
        <video :src="url" loop autoplay muted preload></video>
    </div>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import IndexSkeleton from './IndexSkeleton.vue';
const url = ref('')
const skeleton = ref(true)

onMounted(()=>{

    setTimeout(()=>{
        fetch('frontend.mp4')
        .then(res=> {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
        })
        .then(res=> {
            url.value = res.url
            skeleton.value = false
        })
        .catch(e => console.log(e))
    },1500)
    
})
</script>

<style>
.contenedorVideo{
    height: 650px;
}
video {
    max-width: 1200px;
}
</style>