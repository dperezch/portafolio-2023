<template>
    <q-card class="my-card-portafolio-skeleton q-my-md animate__animated animate__fadeIn animate__slow"
            v-for="card, index in portafolioStore.cards" :key="index">
            <q-card-section horizontal>
                <q-card-section>
                    <q-skeleton width="250px" height="480px" />
                </q-card-section>

                <q-separator vertical />

                <q-card-section class="flex justify-around column info">
                    <div><q-skeleton type="text" class="text-h6" /></div>
                    <div><q-skeleton type="text" class="text-subtitle2" /></div>
                    <div>
                        <q-skeleton type="text" />
                    </div>
                    <div class="row justify-center">
                        <q-skeleton v-for=" icon in card.icons" :key="index" type="circle" size="40px"/>
                    </div>
                    <q-item class="row flex items-center justify-evenly">
                        <q-skeleton type="circle" size="40px"/>
                        <q-skeleton type="text" width="40%"/>
                    </q-item>
                    <q-item v-if="card.playstore" class="row flex items-center justify-center"
                        >
                        <q-skeleton type="circle" size="30px"/>
                        <q-skeleton type="text" width="40%" class="q-mx-md" />
                    </q-item>
                    <q-item v-if="card.netlify" class="row flex items-center justify-center">
                        <q-skeleton type="circle" size="30px"/>
                        <q-skeleton type="text" width="40%" class="q-mx-md" />
                    </q-item>
                </q-card-section>
            </q-card-section>
        </q-card>
</template>

<script setup>
import { usePortafolioStore } from 'src/stores/portafolio';

const portafolioStore = usePortafolioStore()
</script>

<style >
.my-card-portafolio-skeleton {
    max-width: 500px;
}

.info{
    width: 250px;
}
</style>