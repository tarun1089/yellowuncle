# Loading a dynamic component
`
  const loadComponent = async ()=>{
    component = (await import('components/tinycomponent.svelte')).default;
  };

{#if component}
  <svelte:component this={component}>
    <p>some slotted content</p>
  </svelte:component>
{/if}

`