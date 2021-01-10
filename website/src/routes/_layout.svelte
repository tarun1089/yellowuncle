<script context="module">
  export async function preload({ params }, session) {
    if (typeof window != 'undefined') {
      window.CONFIG = session.config;
    }
  }
</script>

<script>
  // export let segment;
</script>

<svelte:head />
<main class="layout-container">
  <slot />
</main>

<style>

</style>
