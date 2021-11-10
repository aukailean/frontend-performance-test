<template>
  <div>
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      v-if="!tableOpen"
      @click="toggleTableOn"
    >
      Render Table with Vue
    </button>
    <Table v-if="tableOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "./components/Table.vue";

const tableOpen = ref(false);

const toggleTableOn = () => {
  tableOpen.value = true;
};
</script>

<style>
#app {
  padding: 16px;
  text-align: center;
}
</style>
