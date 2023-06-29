<template>

    <!-- DESKTOP -->

    <div class="gt-md column q-my-xl">
        <div class="text-h1 montserrat-font q-my-xl q-pa-xl" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'" id="skills">
            SKILLS
        </div>
        <div class="flex row flex-center" >
            <!-- FRONT -->
            <div class="skill-box flex row">
                <div class="montserrat-font text-h2 col-2 vertical flex flex-center" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
                    FRONTEND SKILLS
                </div>
                <div class="montserrat-font text-h3 col-10 q-pa-md box-yellow" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-yellow'">
                    <p class="q-ml-md" v-for="(text, index) in skillStore.frontEnd" :key="index"> {{ text }} </p>
                </div>
            </div>
            <!-- BACK -->
            <div class="skill-box">
                <div class="montserrat-font text-h2 q-pa-md" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
                    BACKEND BASICS SKILLS
                </div>
                <div class="montserrat-font text-h3 q-pa-md box-yellow" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-yellow'">
                    <p v-for="(text, index) in skillStore.backEnd" :key="index" > {{ text }} </p>
                </div>
            </div>
            <!-- CLOUD COMPUTING SKILLS -->
            <div class="skill-box">
                <div class="montserrat-font text-h2 q-pa-md" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
                    CLOUD COMPUTING SKILLS
                </div>
                <div class="montserrat-font text-h3 q-pa-md box-yellow" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-yellow'">
                    <p v-for="(text,index) in skillStore.cloudSkills" :key="index"> {{ text }} </p>
                </div>
            </div>
            <!-- DEVTOOLS -->
            <div class="skill-box flex row">
                <div class="montserrat-font text-h3 q-pa-md box-yellow" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-yellow'">
                    <p v-for="(text,index) in skillStore.developerTools" :key="index"> {{ text }} </p>
                </div>
                <div class="montserrat-font text-h2 vertical-2 q-pa-md" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
                    DEV TOOLS
                </div>
            </div>
            <!-- DESIGN TOOLS -->
            <div class="skill-box">
                <div class="montserrat-font text-h2 q-pa-md" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
                    DESIGN TOOLS
                </div>
                <div class="montserrat-font text-h3 q-pa-md box-yellow" :class="$q.dark.isActive? 'bg-cyan-7': 'bg-yellow'">
                    <p v-for="(text, index) in skillStore.design" :key="index"> {{ text }} </p>
                </div>
            </div>
        </div>

        <div class="text-h2 montserrat-font q-my-md q-pa-md text-center" :class="$q.dark.isActive? 'bg-white-brand text-black': 'bg-black text-white-brand'">
            BADGES
        </div>

        <div class="flex justify-evenly">
            <q-btn 
                v-for="(badge , index) in skillStore.badges" :key="index"
                round 
                class="q-pa-xl q-my-xl"
                :href="badge.path"
                target="_blank"
            >
                <q-avatar rounded size="180px" >
                    <img :src="badge.src">
                </q-avatar>
            </q-btn>            
        </div>
        
        
    </div>


    <!-- MOBILE -->
    
    <div class="row lt-lg justify-evenly animate__animated animate__fadeIn animate__slower ">
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
import { useSkillStore } from 'src/stores/skillStore';

const $q = useQuasar()
const skillStore = useSkillStore()

</script>

<style lang="sass" scoped>
.skillCard
    width: 100%
    max-width: 350px
p
    font-family: 'Montserrat', sans-serif
    font-weight: normal

.skill-box
    margin: 2em
    width: 600px

.box-yellow
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px

.vertical
    writing-mode: vertical-lr
    transform: rotate(180deg)

.vertical-2
    writing-mode: vertical-lr
</style>