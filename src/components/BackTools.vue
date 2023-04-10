<template>
    <div class=" flex justify-center">
      <div style="max-width: 90%; width: 600px;">
        <q-intersection
          transition="rotate"
          class="example-item2 q-my-md"
          v-for="list in skillStore.backendTools" :key="list.index"
        >
          <q-item v-ripple class="montserrat-font q-my-md">
            <q-item-section avatar>
              <q-avatar color="purple-6" text-color="white">
                {{ list.letra }}
              </q-avatar>
            </q-item-section>
  
            <q-item-section class=" q-my-md text-black">
              <q-item-label> {{ list.nombre }} </q-item-label>
              <q-item-label caption lines="5" class="text-black"> {{ list.label }} </q-item-label>
            </q-item-section>
  
            <q-item-section side>
              <q-icon name="done_outline" color="black" />
            </q-item-section>
          </q-item>
        </q-intersection>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useSkillStore } from 'src/stores/skillStore';
  
  const skillStore = useSkillStore()
  
  </script>
  
  <style scoped>
  .example-item2{
    height: 56px}
  </style>