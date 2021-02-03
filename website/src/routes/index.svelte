<script>
  import { onMount } from 'svelte';
  import Navbar from 'components/common/navbar';
</script>

<svelte:head>
  <title>YellowUncle</title>
</svelte:head>

<div class="page-wrapper with-navbar">
  <Navbar/>
  <!-- Content wrapper -->
  <div class="content-wrapper">
    ...
  </div>
</div>


<style lang="scss">
  @import '../scss/common.scss';
  // .image{
  //   background-image: url("images/successkid.jpg")
  // }

</style>
