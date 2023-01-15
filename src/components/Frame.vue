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
  
            <q-item-section class="text-white">
              <q-item-label> {{ list.nombre }} </q-item-label>
              <q-item-label caption lines="5" class="text-white"> {{ list.label }} </q-item-label>
            </q-item-section>
  
            <q-item-section side>
              <q-icon name="done_outline" color="white" />
            </q-item-section>
          </q-item>
        </q-intersection>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSkillStore } from 'src/stores/example-store';
  
  const skillStore = useSkillStore()
  
  </script>
  
  <style scoped>
  .example-item2{
    height: 56px}
  </style>