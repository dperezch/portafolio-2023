<template>
    <!-- *** CARD VERSION TABLET -->
    <div class="contenedor-portafolio md">
        <q-card v-if="card" class="my-card-portafolio q-my-md animate__animated animate__fadeIn animate__slow"
            v-for="card, index in portafolioStore.cards" :key="index">
            <q-card-section horizontal>
                <q-card-section>
                    <video :src="card.video" loop autoplay muted></video>
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="flex justify-around">
                    <div class="text-h6"> {{ card.title }} </div>
                    <div class="text-subtitle2"> {{ card.subtitle }} </div>
                    <div>
                        <p> {{ card.description }} </p>
                    </div>
                    <div class="">
                        <q-avatar v-for=" icon, index in card.icons" :key="index" square :size="icon.size">
                            <img :src="icon.path">
                        </q-avatar>

                    </div>
                    <q-item clickable class="row flex items-center justify-center" :href="card.github" target="_blank">
                        <q-avatar size="40px">
                            <img src="github_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md">Github</p>
                    </q-item>
                    <q-item v-if="card.playstore" clickable class="row flex items-center justify-center"
                        :href="card.playstore" target="_blank">
                        <q-avatar square size="30px">
                            <img src="playstore_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Play Store</p>
                    </q-item>
                    <q-item v-if="card.netlify" clickable class="row flex items-center justify-center" :href="card.netlify"
                        target="_blank">
                        <q-avatar square size="30px">
                            <img src="netlify_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Link</p>
                    </q-item>
                </q-card-section>
            </q-card-section>
        </q-card>


        
        <PortafolioCardSkeleton v-if="cardSket" />

    </div>

    <!-- *** CARD VERSION MOBILE -->
    <div class="portafolio-mobile lt-md">

        <q-card class="my-card-portafolio2 q-my-md animate__animated animate__fadeIn animate__slow"
            v-for="card, index in portafolioStore.cards" :key="index">
            <q-card-section>
                <div class="text-h6">{{ card.title }}</div>
                <div class="text-subtitle2">{{ card.subtitle }}</div>
                <div>
                    <p>{{ card.description }}</p>
                </div>
            </q-card-section>

            <q-separator inset />

            <q-card-section>
                <video :src="card.video" loop autoplay muted></video>
            </q-card-section>

            <q-card-section class="q-pt-none column flex justify-around items-center">
                <div class="">
                    <q-avatar v-for=" icon, index in card.icons" :key="index" square :size="icon.size">
                        <img :src="icon.path">
                    </q-avatar>
                </div>
                <div class="row">
                    <q-item clickable class="row flex items-center justify-center" :href="card.github" target="_blank">
                        <q-avatar size="40px">
                            <img src="github_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md">Github</p>
                    </q-item>
                    <q-item v-if="card.playstore" clickable class="row flex items-center justify-center"
                        :href="card.playstore" target="_blank">
                        <q-avatar square size="30px">
                            <img src="playstore_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Play Store</p>
                    </q-item>
                    <q-item v-if="card.netlify" clickable class="row flex items-center justify-center" :href="card.netlify"
                        target="_blank">
                        <q-avatar square size="30px">
                            <img src="netlify_icon.png">
                        </q-avatar>
                        <p class="text-subtitle2 q-mt-md q-mx-xs">Link</p>
                    </q-item>
                </div>

            </q-card-section>
        </q-card>

    </div>
</template>

<script setup>
import { usePortafolioStore } from 'src/stores/portafolio';
import PortafolioCardSkeleton from './PortafolioCardSkeleton.vue';
import { onMounted, ref } from 'vue';

const portafolioStore = usePortafolioStore()

const card = ref(false)
const cardSket = ref(true)

onMounted(() => {
    setTimeout(() => {
        cardSket.value = false
        card.value = true
    }, 2000);
})

</script>

<style scoped>
.contenedor-portafolio {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.my-card-portafolio {
    max-width: 500px;
}

video {
    max-width: 250px;
}

.portafolio-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.my-card-portafolio2 {
    max-width: 300px;
    width: 100%;
}
</style>