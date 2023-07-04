<template>
    <!-- DESKTOP -->
    <div class="gt-md q-my-xl" id="contact">
        <div class="text-h1 montserrat-font text-center q-pr-xl q-my-xl">
            <p class="q-mr-xl">PORTAFOLIO</p>
        </div>
        <div class="flex row wrap justify-evenly">
          <DesktopCard />  
        </div>
        
    </div>

    <!-- MOBILE -->
    <PortafolioCard/>
    
</template>

<script setup>
import PortafolioCard from 'src/components/PortafolioCard.vue';
import DesktopCard from "src/components/DesktopCard.vue"

</script>

<style scoped>

.my-card-portafolio {
    max-width: 800px;
}
video {
    max-width: 400px;
}
</style>