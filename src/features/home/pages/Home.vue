<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();
</script>

<template>
  <div>
    <h1></h1>
    <button @click="themeStore.toggleTheme">Toggle Theme</button>
  </div>
</template>
