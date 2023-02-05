<template>

   
    <div class="row wrap flex justify-center items-center">
        <q-item clickable class="linkedin" href="https://www.linkedin.com/in/dperezch/" target="_blank" :active="active" >
            <q-item-section top avatar>
                <q-icon name="bi-linkedin" size="3em" color="blue" />
            </q-item-section>
        </q-item>

        <q-item class="email" href="mailto:davarmando@gmail.com">
            <q-item-section top avatar>
                <q-icon name="email" size="3em" color="red" />
            </q-item-section>
        </q-item>

        <q-item class="whatsap" href="https://api.whatsapp.com/send?phone=56950627883&text=Hola,%20te%20contacto%20desde%20tu%20portafolio" target="_blank">
            <q-item-section top avatar>
                <q-icon name="bi-whatsapp" size="3em" color="green" />
            </q-item-section>
        </q-item>
    </div>

    
</template>

<script setup>
import { ref } from 'vue';


const active= ref(false)
</script>

<style scoped>

.linkedin, .email, .whatsap{
    transition: transform .2s; 
}

.linkedin:hover, .email:hover, .whatsap:hover{
    transform: scale(1.2); 
}


</style>