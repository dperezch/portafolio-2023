<template>
    <div class=" gt-md">
        <!-- <div class="col cont-video">
            <video :src="videoApp" loop autoplay muted></video>
        </div>
        <div class="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quas, veritatis expedita temporibus ea, accusantium aut at dolor odit ipsum, incidunt est fugiat optio numquam facilis alias recusandae aperiam velit.
        </div> -->

        <q-card class="my-card-portafolio" >
            <q-card-section horizontal>
                <q-card-section>
                    <video :src="videoApp" loop autoplay muted></video>
                </q-card-section>

                <q-separator vertical />

                <q-card-section>
                    <div class="text-h6">Lista de compras</div>
                    <div class="text-subtitle2">Aplicación android</div>
                    <div>
                        <p>Aplicación híbrida, realizada con el framework QuasarJS que está basado en VueJS. </p>
                    </div>
                    <div class="">
                        <q-avatar size="50px">
                            <img src="data:image/png;base64,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">
                        </q-avatar>
                        <q-avatar size="50px">
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
                        </q-avatar>
                        <q-avatar size="50px">
                            <img src="https://cordova.apache.org/static/img/cordova_bot.png">
                        </q-avatar>
                        <q-avatar size="50px">
                            <img src="https://developer.android.com/static/images/logos/android.svg">
                        </q-avatar>
                    </div>
                </q-card-section>
            </q-card-section>
        </q-card>

    </div>

    
</template>

<script setup>
import { ref } from 'vue';


const videoApp= ref('app-lista-compras.mp4')

</script>

<style scoped>
.my-card-portafolio{
    max-width: 500px;
}
video{
    max-width: 200px;
}



</style>