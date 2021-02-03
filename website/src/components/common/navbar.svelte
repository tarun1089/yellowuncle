<script>
  import {onMount} from 'svelte';

  let darkModeEnabled = false;

  const changeTheme = () =>{
    halfmoon.toggleDarkMode();
    setMode();
  }

  const setMode = ()=>{
    const preferredMode = halfmoon.getPreferredMode();
    console.log(preferredMode);
    darkModeEnabled = preferredMode === "dark-mode";
  }

  onMount(()=>{
    setMode();
  });
</script>

<nav class="navbar">
    <a href="/" class="navbar-brand">
      <img src="images/logo/yellowuncle_120x120.png" alt="Yellow uncle Logo">
       Yellow Uncle
    </a>
    <div class="right-side-content ml-auto">
      <div class="custom-switch">
        <input on:click={changeTheme} type="checkbox" id="dark-mode-switch" value="" checked={darkModeEnabled?"checked":""}/>
        <label for="dark-mode-switch">Dark Mode</label>
      </div>
    </div>
</nav>