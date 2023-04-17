<template>
    <video :src="herovideo" loop autoplay muted></video>
</template>

<script setup>
import { ref } from 'vue';

const herovideo = ref('video-marketing.mp4')
</script>

<style>
video {
    max-width: 800px;
}
</style>