<template>
  <main>
    <label for="name">Name (4 to 8 characters):</label>
    <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
  </main>
</template>

<script setup>
/**
 * Ce composant représente un champ de saisie permettant à l'utilisateur de saisir un nom.
 * Il impose des contraintes de longueur (minimum 4, maximum 8 caractères) et nécessite une saisie.
 *
 * @component
 * @example
 * <NameInput />
 */
</script>

<style>
/**
 * Style principal du composant.
 * Ce style permet de définir une hauteur de 100% de la vue pour le conteneur principal.
 * 
 * @type {string}
 */
main {
  height: 100vh;
}
</style>
