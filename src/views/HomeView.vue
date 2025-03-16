<template>
  <main>
    <label for="name">Name (4 to 8 characters):</label>
    <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
  </main>
</template>

<script setup></script>

<style>
main {
  height: 100vh;
}
</style>
