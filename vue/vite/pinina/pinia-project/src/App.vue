<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore } from "./stores/counter"
import CompA from './components/CompA.vue'

let counter = useCounterStore()
console.log(counter);

</script>

<template>
  <header>
    
    <CompA/>
    <h1>{{counter.name}}</h1>
    <h2>{{ counter.doubleCount }}</h2>
    <button @click="counter.increment">{{counter.count}}</button>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
