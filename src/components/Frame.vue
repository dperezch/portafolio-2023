<template>
    <div class=" flex justify-center">
      <div style="max-width: 90%; width: 600px;">
        <q-intersection
          transition="rotate"
          class="example-item2"
          v-for="list in skillStore.frameworks" :key="list.index"
        >
          <q-item v-ripple class="montserrat-font">
            <q-item-section avatar>
              <q-avatar color="teal-6" text-color="white">
                {{ list.letra }}
              </q-avatar>
            </q-item-section>
  
            <q-item-section :class="$q.dark.isActive? 'text-black': 'text-white' ">
              <q-item-label> {{ list.nombre }} </q-item-label>
              <q-item-label caption lines="5" :class="$q.dark.isActive? 'text-black': 'text-white' " > {{ list.label }} </q-item-label>
            </q-item-section>
  
            <q-item-section side>
              <q-icon name="done_outline" :color="$q.dark.isActive? 'black': 'white' " />
            </q-item-section>
          </q-item>
        </q-intersection>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSkillStore } from 'src/stores/skillStore';
  import { useQuasar } from 'quasar'

  const $q = useQuasar()
  
  const skillStore = useSkillStore()
  
  </script>
  
  <style scoped>
  .example-item2{
    height: 56px}
  </style>