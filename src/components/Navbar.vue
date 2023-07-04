<template>
    <div >
        <ul class="menu">
            <li v-for="(link, index) in navbarStore.links" :key="index">
                <a :href="link.href" :class="$q.dark.isActive? 'text-white': 'text-black'">
                    <span> {{ link.name }} </span>
                    <span>
                        <i :class="link.icon" aria-hidden="true"></i>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useNavbarStore } from 'src/stores/navbar';
import { useQuasar } from 'quasar'

const navbarStore = useNavbarStore()
const $q = useQuasar()

</script>

<style scoped>
ul {
  list-style: none;
}
a {
  font-family: 'Montserrat';  
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
}
.menu {
  display: flex;
  justify-content: center;
}

.menu li {
  margin-right: 70px;
}

.menu a {
  position: relative;
  display: block;
  overflow: hidden;
}
.menu a span {
  transition: transform 0.2s ease-out;
}
.menu a span:first-child {
  display: inline-block;
  padding: 10px;
}
.menu a span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}
.menu i {
  font-size: 30px;
}
.menu a:hover span:first-child {
  transform: translateY(100%);
}
.menu a:hover span:last-child,
.menu[data-animation] a:hover span:last-child {
  transform: none;
}

/* transicion */
.menu[data-animation="to-top"] a span:last-child {
  transform: translateY(100%);
}

.menu[data-animation="to-top"] a:hover span:first-child {
  transform: translateY(-100%);
}
</style>