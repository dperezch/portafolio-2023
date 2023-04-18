<template>
    
    <div class="row justify-evenly animate__animated animate__fadeIn animate__slower ">
        <q-card class="skillCard q-mb-xl q-pb-xl"  :class="$q.dark.isActive? 'bg-blue-grey-2 text-black' : 'bg-grey-10 text-white'">
            <q-card-section>
                <q-avatar color="teal-6" text-color="white" icon="developer_mode" size="80px" />
                
            </q-card-section>
            <q-card-section>
              <p class=" text-h6">Desarrollo Frontend</p>
            </q-card-section>
            <q-card-section>
                <p class="q-mx-xl ">Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
            </q-card-section>
            <q-card-section>
                <p class="text-teal-6 text-h6">Lenguajes que uso:</p>
            </q-card-section>
            <q-card-section>
                <Skills />
            </q-card-section>
            <q-card-section>
                <p class="text-teal-6 text-h6">Frameworks:</p>
            </q-card-section>
            <q-card-section>
                <Frame/>
            </q-card-section>
            <q-card-section>
                <p class="text-teal-6 text-h6">Dev Tools:</p>
            </q-card-section>
            <q-card-section>
                <Tools/>
            </q-card-section>
        </q-card>
        
        <q-card class="skillCard bg-white q-mb-xl q-pb-xl"  :class="$q.dark.isActive? 'bg-grey-10 text-white' : 'bg-blue-grey-2 text-black'">
            <q-card-section>
                <q-avatar color="purple-6" text-color="white" icon="bi-database-check" size="80px" />
                
            </q-card-section>
            <q-card-section>
              <p class=" text-h6">Desarrollo Backend</p>
            </q-card-section>
            <q-card-section>
                <p class="q-mx-xl ">Mi conocimiento en Backend es básico, pero aprendo rápido a medida que practico.</p>
            </q-card-section>
            <q-card-section>
                <p class="text-purple-6 text-h6">Lenguajes que uso:</p>
            </q-card-section>
            <q-card-section>
                <Backend/>
            </q-card-section>
            <q-card-section>
                <p class="text-purple-6 text-h6">Dev Tools:</p>
            </q-card-section>
            <q-card-section>
                <BackTools/>
            </q-card-section>
            
        </q-card>

        <q-card class="skillCard q-mb-xl q-pb-xl"  :class="$q.dark.isActive? 'bg-blue-grey-2 text-black' : 'bg-grey-10 text-white'">
            <q-card-section>
                <q-avatar color="amber-8" text-color="white" icon="bi-columns-gap" size="80px" />
                
            </q-card-section>
            <q-card-section>
              <p class=" text-h6">Diseño</p>
            </q-card-section>
            <q-card-section>
                <p class="q-mx-xl ">Hago uso de mis conocimientos en arte y composición y me manejo utilizando programas de edición de imágenes y videos.</p>
            </q-card-section>
            <q-card-section>
                <p class="text-amber-8 text-h6">Herramientas de diseño:</p>
            </q-card-section>
            <q-card-section>
                <Design/>
            </q-card-section>
            
        </q-card>


        
    </div>
    
</template>

<script setup>
import { useQuasar } from 'quasar'
import Skills from 'src/components/Skills.vue';
import Frame from 'src/components/Frame.vue';
import Tools from 'src/components/Tools.vue';
import Backend from 'src/components/Backend.vue';
import BackTools from 'src/components/BackTools.vue';
import Design from '../components/DesignTools.vue';

const $q = useQuasar()

</script>

<style lang="sass" scoped>
.skillCard
    width: 100%
    max-width: 350px
p
    font-family: 'Montserrat', sans-serif
    font-weight: normal
</style>