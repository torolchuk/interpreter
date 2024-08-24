<script lang="ts">
  export let label: string = "";
  export let control: string = "";
  export let element: string = "label";
</script>

<div class="wrapper">
  <svelte:element this={element} control={control}>
    <span class="label-text">
      {label}
    </span>
    <slot />
  </svelte:element>
</div>

<style>
  .wrapper {
    margin-bottom: 16px;
  }

  .label-text {
    margin-bottom: 8px;
    display: block;
    color: #fff;
    font-size: 12px;
  }
</style>

